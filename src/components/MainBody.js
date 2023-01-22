import React,{useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

  import QRCode from "react-qr-code";
  import Modal from 'react-modal';
  import customStyles from './ModalCustomStyles';
  import LinkComponent from './LinkComponent'


const MainBody = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState([])

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const handleAddLink = () => {
        setLinks([...links, 1]);
      }
    
      const handleRemoveLink = (index) => {
        const values = [...links];
        values.splice(index,1);
        setLinks(values);
    
      }

    return (
        <div className="flex flex-col-reverse xl:flex-row md:flex-row w-full h-full xl:justify-center md:justify-center">
            {/* Left Side of Main Body Starts */}
                <div className="md:w-4/12 2xl:w-5/12 h-full min-h-full w-screen flex flex-col items-center md:mt-10 xl:mt-10 lg:mt-10 mt-5 pb-3 md:pb-none">
                <label className="bg-rose-500 w-10/12 md:w-10/12 h-8 2xl:h-12 md:h-10 rounded-md flex justify-center items-center text-white mb-5 cursor-pointer active:scale-105 transition transform duration-200 2xl:text-base" for="addpic">Add Pic</label>
                <input type="file" className="hidden" id="addpic"/>

                <label className="bg-rose-500 w-10/12 md:w-10/12 md:h-10 h-8 2xl:h-12 rounded-md flex justify-center items-center text-white mb-5 cursor-pointer active:scale-105 transition transform duration-200 2xl:text-base" for="addbacpic">Add Background Pic</label>
                <input type="file" className="hidden" id="addbacpic"/>

                <div onClick={openModal} className="bg-rose-500 w-10/12 md:w-10/12 md:h-10 h-8 2x:h-12 rounded-md flex justify-center items-center mb-5 cursor-pointer active:scale-105 transition transform duration-200">
                    <p className="text-white 2xl:text-base">Create Menu</p>
                </div>

                <div className="bg-rose-500 w-10/12 md:w-10/12 md:h-10 h-8 2xl:h-12 rounded-md flex justify-center items-center mb-12 cursor-pointer active:scale-105 transition transform duration-200">
                    <p className="text-white 2xl:text-base">Create QR Code</p>
                </div>

                <div className="md:w-10/12 w-10/12 h-56 flex justify-center">
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value="value"
                        viewBox={`0 0 256 256`}
                        />
                </div>

                <div className="bg-rose-500 w-10/12 md:w-10/12 h-9 2xl:h-11 rounded-md flex justify-center items-center cursor-pointer mt-6 active:scale-105 transition transform duration-200">
                    <p className="text-white 2xl:text-base">Download</p>
                </div>

            </div>
            {/* Left Side of Main Body Ends */}


            {/* Right Side of Main Body Starts */}

            <div className="md:w-4/12 2xl:w-5/12 md:h-screen lg:h-screen xl:h-screen w-screen flex flex-col items-center mt-10">
                <textarea placeholder="Bio" className="bg-white w-10/12 md:w-10/12 rounded-md flex justify-center items-center mb-5 border-2 shadow-md border-slate-600">Bio</textarea>

                <div className="bg-rose-500 w-10/12 md:w-10/12 h-7 md:h-8 2xl:h-10 xl:h-8 rounded-md flex justify-center items-center mb-5 cursor-pointer active:scale-105 transition transform duration-200">
                    <p className="text-white text-sm 2xl:text-base">Add Bio</p>
                </div>

                <div onClick={() => handleAddLink()} className="bg-rose-500 w-10/12 md:w-10/12 md:h-8 xl:h-8 h-7 2xl:h-10 rounded-md flex justify-center items-center mt-3 mb-5 cursor-pointer active:scale-105 transition transform duration-200">
                    <p className="text-white text-sm 2xl:text-base">Add Link</p>
                </div>

                {links != ""  ?
                <div className="md:w-11/12 w-10/12 mt-3 h-96 overflow-scroll">
                    {links.map((link, index) => (
                        <LinkComponent handleRemoveLink={handleRemoveLink} index={index}/>
                    ))}
                    
                </div>:null}
            </div>
            {/* Right Side of Main Body Ends */}

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <button className="bg-rose-500 p-1 text-white" onClick={closeModal}>close</button>
            <div>I am a modal</div>
            </Modal>

            </div>
    )
}

export default MainBody;