import React, { useState } from "react";
import Popup from "../../../components/Popup/Popup";
import {
  MdOutlineToggleOff,
  MdOutlineToggleOn,
  MdRestoreFromTrash,
  MdEditNote,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  Creattag,
  Deletetag,
    Editagstatus,
} from "../../../redux/ShopReduser/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";




const Tags = () => {
  const [popup, setpopup] = useState({
    type: "",
    show: false,
    edit:{}
  });


  const [input, setinput] = useState({name:"",slug:""});
 
  const dispatch = useDispatch();
  const {tags } = useSelector((state) => state.shop);
   
 const handleinput=(e)=>{

   setinput({
    ...input,
    [e.target.name]: e.target.value
 })



 }
  const handlecreate= async (e) => {
    
     let data = Object();
 
    data.name=input.name
    data.slug=input.slug
    if (!input.name || !input.slug) {
      toast(`all field are requred`);
    } else {
      dispatch(Creattag(data));
      setinput({});
       setpopup({ type: "create", show: false });
      toast(`Tag created successfull`);
    }
  };

 



  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )

        dispatch(Deletetag(e));
        //  setalert(true)
        toast("Deleted successfull!");
      }
    });
  };

  const handlestatus = ({ _id, status, name }) => {

    let data = Object();
 
     if(popup.type ==='edit'){

       data.name=input.name   
       data.slug=input.slug   
      }
    data.status=!status

    dispatch(Editagstatus(popup.type=='edit'? popup.edit._id:_id, data));
    toast(`tags ${name} is now ${!status ? "publised" : " unpublish"}`);
    setinput({});
  
    setpopup({ type: "create", show: false });

  };

  const handleditbtn = (e) => {
    setpopup({ type: "edit", show: true ,edit:e});
    setinput({

  name:e.name,
  slug:e.slug

    })

  };

  return (
    <>
      <div className="flex items-center  transition-all duration-150 justify-between p-2 ">
        
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* create brand from  */}
        <Popup action={{ popup, setpopup,setinput }}>
          <div className="w-80 space-y-2">
            <p className="text-lg font-semibold capitalize">name :</p>

            <input
              value={input.name}
              name="name"
              // placeholder={popup.edit}
              onChange={handleinput}
              className="w-full p-1 rounded-md border focus:outline-none"
              type="text"
            />

        
            <p className="text-lg font-semibold capitalize">slug :</p>

            <input
            name="slug"
              value={input.slug}
              // placeholder={popup.edit}
              onChange={handleinput}
              className="w-full p-1 rounded-md border focus:outline-none"
              type="text"
            />

        






    
      

            <button
              onClick={ popup.type=='create'?handlecreate:handlestatus}
              className="text-white text-lg bg-blue-500 py-1 rounded-md font-semibold w-full text-center"
            >
             {popup.type=='create'?'Save':'Update'}
            </button>
          </div>
        </Popup>

        <p className="text-2xl text-secondary   font-bold">Tags</p>

        <p
          className="text-lg text-secondary font-semibold cursor-pointer bg-gray-200 px-4 rounded-md "
          onClick={() => {
            setpopup({ type: "create", show: true,edit:{} });
          }}
        >
          Create +
        </p>
      </div>

      <div>
        <table className="w-11/12 mx-auto  mt-2">
          <thead className="text-lg">
            <tr className="  border-y-2 border-black">
              <th className="py-2  ">#</th>
              <th className="py-2  ">Name</th>
               <th className="py-2  ">Status</th>
              <th className="py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className=" font-semibold ">
            {[...tags].map((item, index) => (
              <tr
                key={index}
                className="  copynone text-center py-2  odd:bg-gray-300 even:bg-white    border-b-2 border-black "
              >
                <td className="  ">{index + 1}</td>
                <td className="w-[400px] overflow-x-hidden  ">{item.name}</td>
      
                <td className=" mt-2  flex items-center justify-center gap-2 ">
                  {" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      handlestatus(item);
                    }}
                  >
                    {" "}
                    {!item.status ? (
                      <MdOutlineToggleOff className="mt-1 text-2xl  opacity-50" />
                    ) : (
                      <MdOutlineToggleOn className="   text-2xl text-primary  opacity-100 mt-1" />
                    )}
                  </span>
                  publish
                </td>
                <td className="">
                  <span className="flex items-center justify-center gap-2 text-xl ">
                    <MdRestoreFromTrash
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                      className="bg-red-500 rounded-sm hover:scale-110 transition-all hover:border border-black text-white cursor-pointer"
                    />
                    <MdEditNote
                      onClick={() => {
                        handleditbtn(item);
                      }}
                      className="hover:scale-110 transition-all hover:border border-black bg-yellow-300 rounded-sm text-black cursor-pointer"
                    />
                  </span>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tags;
