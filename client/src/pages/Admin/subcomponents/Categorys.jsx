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
   Createcategory,
  Deletecatagroy,
  Editcatagory,   Editcatagroystatus,
} from "../../../redux/ShopReduser/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";




const Catagries = () => {
  const [popup, setpopup] = useState({
    type: "",
    show: false,
    edit:{}
  });


  const [input, setinput] = useState("");
  const [logo, setlogo] = useState(null);

  const dispatch = useDispatch();
  const {categorys } = useSelector((state) => state.shop);
   
  const handlelogo = (e) => {
 
      
      setlogo(e.target.files[0]);
  
    


  };

  const handlecreate= async (e) => {
    
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("name", input);
    form_data.append("slug", input);
    form_data.append("category-photo", logo);

    if (!input || !logo) {
      toast(`all field are requred`);
    } else {
      dispatch(Createcategory(form_data));
      setinput("");
      setlogo(null);
      setpopup({ type: "create", show: false });
      toast(`Catagory created successfull`);
    }
  };

const handelupdate=(e)=>{

  toast(`category upadate successfull`);
  e.preventDefault();
  let form_data = new FormData();
  form_data.append("name", input);
  form_data.append("slug", input);
  form_data.append("category-photo", logo);
  dispatch(Editcatagory(popup.edit._id,form_data));
  setinput("");
      setlogo(null);
      setpopup({ type: "create", show: false });

} 



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

        dispatch(Deletecatagroy(e));
        //  setalert(true)
        toast("Deleted successfull!");
      }
    });
  };

  const handlestatus = ({ _id, status, name }) => {
    dispatch(Editcatagroystatus(_id, !status));
    toast(`Catagorys ${name} is now ${!status ? "publised" : " unpublish"}`);
  };

  const handleditbtn = (e) => {
    setpopup({ type: "edit", show: true ,edit:e});
    setinput(e.name)
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
        <Popup action={{ popup, setpopup,setlogo,setinput }}>
          <div className="w-80 space-y-2">
            <p className="text-lg font-semibold capitalize">name :</p>

            <input
              value={input}
              // placeholder={popup.edit}
              onChange={(e) => setinput(e.target.value)}
              className="w-full p-1 rounded-md border focus:outline-none"
              type="text"
            />

            <p className="text-lg font-semibold capitalize pb-2">logo :</p>

            <label htmlFor="logo">
              <input
                onChange={handlelogo}
                id="logo"
                className="w-full hidden p-1 rounded-md border focus:outline-none"
                type="file"
              />







              {logo ?(
                <img
                  src={URL.createObjectURL(logo)}
                  className="w-3/6   rounded-md h-32 object-cover border"
                  alt=""
                />
              ) : (
                   
                <div className="w-full relative">


                  <img
                  className="w-3/6   rounded-md h-32 object-cover border"
                  src={ popup.type ==='create'?"https://codemyui.com/wp-content/uploads/2015/09/cloud-file-upload-using-css.gif":`http://localhost:9000/category/${popup.edit.photo}`}    alt='logo'    />
                 
                 {popup.type==='edit'&&<p className="absolute bottom-0 left-0 text-sm bg-red-400 text-white px-1 rounded-md">Remove</p>}
                 
                  </div>
              
              
              )}
            </label>

            <button
              onClick={ popup.type=='create'?handlecreate:handelupdate}
              className="text-white text-lg bg-blue-500 py-1 rounded-md font-semibold w-full text-center"
            >
             {popup.type=='create'?'Save':'Update'}
            </button>
          </div>
        </Popup>

        <p className="text-2xl text-secondary   font-bold">Category</p>

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
              <th className="py-2  ">Logo</th>
              <th className="py-2  ">Status</th>
              <th className="py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className=" font-semibold ">
            {[...categorys].map((item, index) => (
              <tr
                key={index}
                className="  copynone text-center py-2  odd:bg-gray-300 even:bg-white    border-b-2 border-black "
              >
                <td className="  ">{index + 1}</td>
                <td className="w-[400px] overflow-x-hidden  ">{item.name}</td>
                <td className="   ">
                  {" "}
                  {item.photo ? (
                    <img
                      src={`http://localhost:9000/category/${item.photo}`}
                      className="h-8 mx-auto rounded-md w-8 my-2 object-cover"
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202303141430"
                      className="h-8 mx-auto rounded-md w-8 my-2 object-cover"
                      alt=""
                    />
                  )}{" "}
                </td>
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

export default Catagries;
