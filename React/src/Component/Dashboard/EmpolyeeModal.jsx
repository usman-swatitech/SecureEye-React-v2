import React, { useState } from 'react'
import * as images from '../../Constant/images'

const CameraModal = ({ addCamera, setAddCamera }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setAddCamera(name, newValue);
  };



  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };


  return (
    <>
      <div className='modal_box'>
        <div className='text-center'>
          <div className='row d-flex justify-content-center'>
            <div className='col-sm-4'>
              <div className="uploadEmpolyeeImg">
                <label htmlFor="uploadImage">
                  <img className='employeeImg w-100' src={selectedImage || images.uploadEmployeeImg} alt="Avatar" />
                </label>
                <input
                  type="file"
                  id="uploadImage"
                  className='displayBlock'
                  onChange={handleImageChange}
                  accept=".png, .jpg, .jpeg"
                />
              </div>
            </div>
            <div className='col-sm-8'>
              <div className=''>
                <div className='signup-box'>
                  <div className='d-flex'>
                    <div className='mt-2'>
                      <img src={images.userIcon} alt='UserIcon' />
                    </div>
                    <div className='w-100'>
                      <input
                        type='text'
                        className='custom-input-1'
                        placeholder='Employee ID'
                        name='cameraName'
                        value={addCamera.cameraName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                      <div className='flexGrows'></div>
                      <img src={images.cubeDesign} alt='CubeDesign' />
                    </div>
                  </div>
                </div>
                <div className='signup-box'>
                  <div className='d-flex'>
                    <div className='mt-2'>
                      <img src={images.access} alt='UserIcon' />
                    </div>

                    <div className='w-100'>
                      <input
                        type='text'
                        className='custom-input-1'
                        placeholder='Level Access'
                        name='cameraName'
                        value={addCamera.cameraName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                      <div className='flexGrows'></div>
                      <img src={images.cubeDesign} alt='CubeDesign' />
                    </div>
                  </div>
                </div>
                <div className='signup-box mt-2'>
                  <div className='d-flex'>
                    <div className='pt-2'>
                      <img src={images.status} alt='UserIcon' />
                    </div>

                    <div className='w-100'>
                      <input
                        type='text'
                        className='custom-input-1'
                        placeholder='Status'
                        name='ipAddress'
                        value={addCamera.ipAddress}
                        onChange={handleChange}
                      />
                    </div>

                    <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                      <div className='flexGrows'></div>
                      <img src={images.cubeDesign} alt='CubeDesign' />
                    </div>
                  </div>
                </div>

                <div className='signup-box mt-2'>
                  <div className='d-flex'>
                    <div className='pt-2'>
                      <img src={images.workingHrs} alt='UserIcon' />
                    </div>

                    <div className='w-100'>
                      <input
                        type='number'
                        className='custom-input-1'
                        placeholder='Working Hours'
                        name='port'
                        value={addCamera.port}
                        onChange={handleChange}
                      />
                    </div>

                    <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                      <div className='flexGrows'></div>
                      <img src={images.cubeDesign} alt='CubeDesign' />
                    </div>
                  </div>
                </div>

                <div className='signup-box mt-2'>
                  <div className='d-flex'>
                    <div className='pt-2'>
                      <img src={images.departmentlvl} alt='UserIcon' />
                    </div>

                    <div className='w-100'>
                      <select className='custom-input-1 addDepartment' name='Department'>
                        <option value='' disabled selected hidden>
                          Select Department
                        </option>
                        <option className='yyyyyy' value='department1'>Department 1</option>
                        <option value='department2'>Department 2</option>
                        <option value='department3'>Department 3</option>
                      </select>

                    </div>

                    <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                      <div className='flexGrows'></div>
                      <img src={images.cubeDesign} alt='CubeDesign' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CameraModal
