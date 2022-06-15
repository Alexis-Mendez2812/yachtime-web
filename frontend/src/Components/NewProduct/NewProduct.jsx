import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
   postYateForm,
   putYateForm,
} from '../../Redux/Actions/FormActions/formAction';
import { Box, ImageListItem, Button, CircularProgress } from '@mui/material';
import './NewProduct.css';
import style from '../Uploading/Uploading.module.css';
import { getIdYate } from '../../Redux/Actions/actions';
import { Input, Label, InputBox, InputBox2, Label2 } from './styledComponents';

export default function NewProduct() {
   const dispatch = useDispatch();
   const { id } = useParams();
   const navigate = useNavigate();
   const setId = useSelector((state) => {
      return state.userSession;
   });
   let { yateSelected, userSession } = useSelector((state) => {
      return state;
   });
   useEffect(() => {
      if (id) {
         dispatch(getIdYate(id));
      }
   }, [id]);
   const [carga, setCarga] = useState(true);

   const [product, setProduct] = useState({
      id: '',
      make: '',
      model: '40',
      year: '1990',
      cabins: '0',
      bathrooms: '0',
      guest: '0',
      length: '',
      lengthUno: '30',
      lengthDos: '0',
      beam: '',
      beamUno: '10',
      beamDos: '0',
      draft: '',
      draftUno: '3',
      draftDos: '0',
      fuelCapacity: '0',
      waterCapacity: '0',
      cruiseVel: '0',
      location: '',
      fuelType: '',
      description: '',
      pictures: [],
      owner: '',
   });
   if (id && Object.keys(yateSelected).length && carga) {
      setCarga(false);
      setProduct({
         id: id,
         make: yateSelected.make,
         model: yateSelected.model,
         year: yateSelected.year,
         cabins: yateSelected.cabins,
         bathrooms: yateSelected.bathrooms,
         guest: yateSelected.guests,
         length: yateSelected.length,
         lengthUno: yateSelected.length.split("'")[0],
         lengthDos: yateSelected.length.split("'")[1],
         beam: yateSelected.beam,
         beamUno: yateSelected.beam.split("'")[0],
         beamDos: yateSelected.beam.split("'")[1],
         draft: yateSelected.draft,
         draftUno: yateSelected.draft.split("'")[0],
         draftDos: yateSelected.draft.split("'")[1],
         fuelCapacity: yateSelected.fuelCapacity,
         waterCapacity: yateSelected.waterCapacity,
         cruiseVel: yateSelected.cruiseVel,
         location: yateSelected.location,
         fuelType: yateSelected.fuelType,
         description: yateSelected.description,
         pictures: yateSelected.pictures,
         owner: yateSelected.owner,
      });
   }
   useEffect(() => {
      setProduct({ ...product, owner: setId.id });
   }, [setId]);

   const [controller, setController] = useState({});
   const [charging, setCharging] = useState(false);
   const handleFileClick = () => {
      document.querySelector('#inputFile').click();
   };
   const handleFileClick2 = () => {
      document.querySelector('#inputFile2').click();
   };
   const handleOnChange = function (event) {
      setProduct({ ...product, [event.target.name]: event.target.value });
      setController(
         validate({ ...product, [event.target.name]: event.target.value })
      );
   };
   const handleOnChangeBeam = function (event) {
      if (event.target.name === 'beamUno') {
         setProduct({
            ...product,
            beamUno: event.target.value,
            beam: `${event.target.value}' ${product.beamDos}`,
         });
         console.log(product.beam);
      }
      if (event.target.name === 'beamDos') {
         setProduct({
            ...product,
            beamDos: event.target.value,
            beam: `${product.beamUno}' ${event.target.value}`,
         });
         console.log(product.beam);
      }
   };
   const handleOnChangeLength = function (event) {
      if (event.target.name === 'lengthUno') {
         setProduct({
            ...product,
            lengthUno: event.target.value,
            length: `${event.target.value}' ${product.lengthDos}`,
         });
         console.log(product.length);
      }
      if (event.target.name === 'lengthDos') {
         setProduct({
            ...product,
            lengthDos: event.target.value,
            length: `${product.lengthUno}' ${event.target.value}`,
         });
         console.log(product.length);
      }
   };
   const handleOnChangeDraft = function (event) {
      if (event.target.name === 'draftUno') {
         setProduct({
            ...product,
            draftUno: event.target.value,
            draft: `${event.target.value}' ${product.draftDos}`,
         });
         console.log(product.draft);
      }
      if (event.target.name === 'draftDos') {
         setProduct({
            ...product,
            draftDos: event.target.value,
            draft: `${product.draftUno}' ${event.target.value}`,
         });
         console.log(product.draft);
      }
   };
   const handleDeleteFile = (e) => {
      e.preventDefault();
      setProduct({
         ...product,
         pictures: product.pictures.filter((pic) => {
            if (pic !== e.target.value) {
               return pic;
            }
         }),
      });
   };
   const handleFileInputChange = (e) => {
      e.preventDefault();
      if (e.target.files[0]) {
         const file = e.target.files[0];
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = () => {
            if (e.target.id === 'inputFile2') {
               setProduct({
                  ...product,
                  pictures: [reader.result, ...product.pictures],
               });
            } else {
               setProduct({
                  ...product,
                  pictures: [...product.pictures, reader.result],
               });
            }
         };
      }
      console.log(product.pictures);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      setCharging(true);
      if (!product.make || !product.description) {
         setCharging(false);
         return alert('complete todos los campos');
      }
      setTimeout(() => {
         postYateForm(product)
            .then(() => {
               setCharging(false);
               navigate('/');
            })
            .catch(() => {
               setCharging(false);
            });
      }, 3000);
   };
   const handleSubmitEdit = async (e) => {
      e.preventDefault();
      setCharging(true);
      if (!product.make || !product.description) {
         setCharging(false);
         return alert('complete todos los campos');
      }
      console.log(product.id);
      setTimeout(() => {
         putYateForm(product)
            .then(() => {
               setCharging(false);
               navigate('/');
            })
            .catch(() => {
               setCharging(false);
            });
      }, 3000);
   };

   if (charging) {
      return (
         <Box
            style={{
               width: '100vw',
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <CircularProgress color='info' size={100} />
         </Box>
      );
   } else {
      return (
         <>
            <Link to='/userSite/myYacht'>
               <div>
                  <div className='change_btn '>Go back</div>
               </div>
            </Link>
            {id && userSession && yateSelected ? (
               <div className='Form-body'>
                  <form className='Form-form'>
                     <div className='Form-div-title'>
                        <h1 className='Form-title'>Import your Ship!</h1>
                     </div>
                     <div className='Form-div-inputs'>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Make</label> <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='make'
                                 value={product.make}
                                 placeholder='SEA RAY/AZIMUT/MERIDIAN'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Model</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='40'
                                 name='model'
                                 value={product.model}
                                 placeholder='40/45/70/100/120'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Year</label> <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='1990'
                                 max='2023'
                                 name='year'
                                 value={product.year}
                                 placeholder='2000'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Cabins</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 max='30'
                                 name='cabins'
                                 value={product.cabins}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Bathrooms</label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 name='bathrooms'
                                 min='0'
                                 max='20'
                                 value={product.bathrooms}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Guest</label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 max='50'
                                 name='guest'
                                 value={product.guest}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <InputBox className='width100'>
                              <label className='Form-label '>Length</label>
                              <br />
                              <div className='Form-div-internal'>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthUno'
                                    min='30'
                                    max='200'
                                    value={product.lengthUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></Input>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthDos'
                                    min='0'
                                    max='11'
                                    value={product.lengthDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></Input>
                                 <Label className='Form-label-internal '>
                                    {`${product.lengthUno}' ${product.lengthDos}"`}
                                 </Label>
                                 <br />
                              </div>
                           </InputBox>
                           <InputBox className='width100'>
                              <label className='Form-label '>Beam</label> <br />
                              <div className='Form-div-internal'>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='beamUno'
                                    min='10'
                                    max='40'
                                    value={product.beamUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeBeam}
                                 ></Input>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='beamDos'
                                    min='0'
                                    max='11'
                                    value={product.beamDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeBeam}
                                 ></Input>
                                 <Label className='Form-label-internal '>
                                    {`${product.beamUno}' ${product.beamDos}"`}
                                 </Label>
                                 <br />
                              </div>
                           </InputBox>
                           <InputBox2 className='width100'>
                              <label className='Form-label '>Length</label>
                              <br />
                              <div className='Form-div-internal'>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthUno'
                                    min='30'
                                    max='200'
                                    value={product.lengthUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></input>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthDos'
                                    min='0'
                                    max='11'
                                    value={product.lengthDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></input>
                                 <label className='Form-label-internal '>
                                    {`${product.lengthUno}' ${product.lengthDos}"`}
                                 </label>
                                 <br />
                              </div>
                           </InputBox2>
                        </div>
                        <InputBox2 className='width100'>
                           <label className='Form-label '>Beam</label> <br />
                           <div className='Form-div-internal'>
                              <input
                                 className='Form-input-internal'
                                 type='number'
                                 name='beamUno'
                                 min='10'
                                 max='40'
                                 value={product.beamUno}
                                 placeholder='Title'
                                 onChange={handleOnChangeBeam}
                              ></input>
                              <input
                                 className='Form-input-internal'
                                 type='number'
                                 name='beamDos'
                                 min='0'
                                 max='11'
                                 value={product.beamDos}
                                 placeholder='Title'
                                 onChange={handleOnChangeBeam}
                              ></input>
                              <label className='Form-label-internal '>
                                 {`${product.beamUno}' ${product.beamDos}"`}
                              </label>
                              <br />
                           </div>
                        </InputBox2>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Draft</label>{' '}
                              <br />
                              <div className='Form-div-internal'>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='draftUno'
                                    min='3'
                                    max='10'
                                    value={product.draftUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeDraft}
                                 ></input>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='draftDos'
                                    min='0'
                                    max='11'
                                    value={product.draftDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeDraft}
                                 ></input>
                                 <label className='Form-label-internal '>
                                    {`${product.draftUno}' ${product.draftDos}"`}
                                 </label>
                                 <br />
                              </div>
                           </div>
                           <InputBox className='width100'>
                              <label className='Form-label '>
                                 Fuel Capacity
                              </label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='fuelCapacity'
                                 value={product.fuelCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </InputBox>
                           <InputBox2
                              className='width100'
                              style={{ width: '70%' }}
                           >
                              <label className='Form-label '>
                                 Fuel Capacity
                              </label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='fuelCapacity'
                                 value={product.fuelCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </InputBox2>
                           <div className='width100'>
                              <label className='Form-label '>
                                 WaterCapacity
                              </label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='waterCapacity'
                                 value={product.waterCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Cruise Vel</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='cruiseVel'
                                 value={product.cruiseVel}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                        <div className='inputContUp'>
                           <div className='width50'>
                              <label className='Form-label '>Location</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='location'
                                 value={product.location}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width50'>
                              <label className='Form-label '>Description</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='description'
                                 value={product.description}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                     </div>
                     <div className='Form-div-controlers'>
                        {controller.make && (
                           <p className='Form-controller'>●{controller.make}</p>
                        )}
                        {controller.pictures && (
                           <p className='Form-controller'>
                              ●{controller.pictures}
                           </p>
                        )}
                        {controller.description && (
                           <p className='Form-controller'>
                              ●{controller.description}
                           </p>
                        )}
                     </div>
                     <label onClick={handleFileClick} className='addButton'>
                        Add Pictures
                     </label>
                     <br />
                     <Box className={style.uploadingContainer}>
                        <input
                           id='inputFile'
                           type='file'
                           onChange={handleFileInputChange}
                           name='image'
                           style={{ display: 'none' }}
                        />
                        <Box className={style.imgContainer}>
                           {product.pictures.length > 0 &&
                              product.pictures.map((pic, i) => {
                                 return (
                                    <ImageListItem
                                       style={{
                                          margin: '1vw',
                                          display: 'flex',
                                          flexDirection: 'column',
                                       }}
                                       key={i}
                                    >
                                       <button
                                          onClick={(e) => handleDeleteFile(e)}
                                          value={pic}
                                          className={style.deleteButton}
                                       >
                                          Delete
                                       </button>
                                       <img
                                          src={pic}
                                          alt=''
                                          style={{ width: '10vw' }}
                                       />
                                    </ImageListItem>
                                 );
                              })}
                        </Box>
                     </Box>
                     {!controller.button && (
                        <Button
                           style={{ marginTop: '0.5vh' }}
                           color='success'
                           onClick={handleSubmitEdit}
                           variant='contained'
                        >
                           E D I T
                        </Button>
                     )}
                     {controller.button && (
                        <Button
                           style={{ marginTop: '0.5vh' }}
                           color='error'
                           variant='contained'
                        >
                           DISABLED
                        </Button>
                     )}
                  </form>
               </div>
            ) : (
               <h1>Cargando...</h1>
            )}
            {!id && (
               <div className='Form-body'>
                  <form className='Form-form'>
                     <div className='Form-div-title'>
                        <h1 className='Form-title'>Import your Ship!</h1>
                     </div>
                     <div className='Form-div-inputs'>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Make</label> <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='make'
                                 value={product.make}
                                 placeholder='SEA RAY/AZIMUT/MERIDIAN'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Model</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='40'
                                 name='model'
                                 value={product.model}
                                 placeholder='40/45/70/100/120'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Year</label> <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='1990'
                                 max='2023'
                                 name='year'
                                 value={product.year}
                                 placeholder='2000'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Cabins</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 max='30'
                                 name='cabins'
                                 value={product.cabins}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Bathrooms</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 name='bathrooms'
                                 min='0'
                                 max='20'
                                 value={product.bathrooms}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Guest</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 max='50'
                                 name='guest'
                                 value={product.guest}
                                 placeholder='1-2-3....'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <InputBox className='width100'>
                              <label className='Form-label '>Length</label>
                              <br />
                              <div className='Form-div-internal'>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthUno'
                                    min='30'
                                    max='200'
                                    value={product.lengthUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></Input>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthDos'
                                    min='0'
                                    max='11'
                                    value={product.lengthDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></Input>
                                 <Label className='Form-label-internal '>
                                    {`${product.lengthUno}' ${product.lengthDos}"`}
                                 </Label>
                                 <br />
                              </div>
                           </InputBox>
                           <InputBox className='width100'>
                              <label className='Form-label '>Beam</label> <br />
                              <div className='Form-div-internal'>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='beamUno'
                                    min='10'
                                    max='40'
                                    value={product.beamUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeBeam}
                                 ></Input>
                                 <Input
                                    className='Form-input-internal'
                                    type='number'
                                    name='beamDos'
                                    min='0'
                                    max='11'
                                    value={product.beamDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeBeam}
                                 ></Input>
                                 <Label className='Form-label-internal '>
                                    {`${product.beamUno}' ${product.beamDos}"`}
                                 </Label>
                                 <br />
                              </div>
                           </InputBox>
                           <InputBox2 className='width100'>
                              <label className='Form-label '>Length</label>
                              <br />
                              <div className='Form-div-internal'>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthUno'
                                    min='30'
                                    max='200'
                                    value={product.lengthUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></input>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='lengthDos'
                                    min='0'
                                    max='11'
                                    value={product.lengthDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeLength}
                                 ></input>
                                 <label className='Form-label-internal '>
                                    {`${product.lengthUno}' ${product.lengthDos}"`}
                                 </label>
                                 <br />
                              </div>
                           </InputBox2>
                        </div>
                        <InputBox2 className='width100'>
                           <label className='Form-label '>Beam</label> <br />
                           <div className='Form-div-internal'>
                              <input
                                 className='Form-input-internal'
                                 type='number'
                                 name='beamUno'
                                 min='10'
                                 max='40'
                                 value={product.beamUno}
                                 placeholder='Title'
                                 onChange={handleOnChangeBeam}
                              ></input>
                              <input
                                 className='Form-input-internal'
                                 type='number'
                                 name='beamDos'
                                 min='0'
                                 max='11'
                                 value={product.beamDos}
                                 placeholder='Title'
                                 onChange={handleOnChangeBeam}
                              ></input>
                              <label className='Form-label-internal '>
                                 {`${product.beamUno}' ${product.beamDos}"`}
                              </label>
                              <br />
                           </div>
                        </InputBox2>
                        <div className='inputContUp'>
                           <div className='width100'>
                              <label className='Form-label '>Draft</label>{' '}
                              <br />
                              <div className='Form-div-internal'>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='draftUno'
                                    min='3'
                                    max='10'
                                    value={product.draftUno}
                                    placeholder='Title'
                                    onChange={handleOnChangeDraft}
                                 ></input>
                                 <input
                                    className='Form-input-internal'
                                    type='number'
                                    name='draftDos'
                                    min='0'
                                    max='11'
                                    value={product.draftDos}
                                    placeholder='Title'
                                    onChange={handleOnChangeDraft}
                                 ></input>
                                 <label className='Form-label-internal '>
                                    {' '}
                                    {`${product.draftUno}' ${product.draftDos}"`}
                                 </label>{' '}
                                 <br />
                              </div>
                           </div>
                           <InputBox className='width100'>
                              <label className='Form-label '>
                                 Fuel Capacity
                              </label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='fuelCapacity'
                                 value={product.fuelCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </InputBox>
                           <InputBox2
                              className='width100'
                              style={{ width: '70%' }}
                           >
                              <label className='Form-label '>
                                 Fuel Capacity
                              </label>
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='fuelCapacity'
                                 value={product.fuelCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </InputBox2>
                           <div className='width100'>
                              <label className='Form-label '>
                                 WaterCapacity
                              </label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='waterCapacity'
                                 value={product.waterCapacity}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width100'>
                              <label className='Form-label '>Cruise Vel</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='number'
                                 min='0'
                                 name='cruiseVel'
                                 value={product.cruiseVel}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                        <div className='inputContUp'>
                           <div className='width50'>
                              <label className='Form-label '>Location</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='location'
                                 value={product.location}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                           <div className='width50'>
                              <label className='Form-label '>Description</label>{' '}
                              <br />
                              <input
                                 className='Form-input'
                                 type='text'
                                 name='description'
                                 value={product.description}
                                 placeholder='Title'
                                 onChange={handleOnChange}
                              ></input>
                           </div>
                        </div>
                     </div>
                     <div className='Form-div-controlers'>
                        {controller.make && (
                           <p className='Form-controller'>●{controller.make}</p>
                        )}
                        {controller.pictures && (
                           <p className='Form-controller'>
                              ●{controller.pictures}
                           </p>
                        )}
                        {controller.description && (
                           <p className='Form-controller'>
                              ●{controller.description}
                           </p>
                        )}
                     </div>
                     <label onClick={handleFileClick} className='addButton'>
                        Add Pictures
                     </label>
                     <Label2 onClick={handleFileClick2} className='addButton'>
                        Cover Image
                     </Label2>
                     <br />
                     <Box className={style.uploadingContainer}>
                        <input
                           id='inputFile'
                           type='file'
                           onChange={handleFileInputChange}
                           name='image'
                           style={{ display: 'none' }}
                        />
                        <input
                           id='inputFile2'
                           type='file'
                           onChange={handleFileInputChange}
                           name='image'
                           style={{ display: 'none' }}
                        />
                        <Box className={style.imgContainer}>
                           {product.pictures.length > 0 &&
                              product.pictures.map((pic, i) => {
                                 return (
                                    <ImageListItem
                                       style={{
                                          margin: '1vw',
                                          display: 'flex',
                                          flexDirection: 'column',
                                       }}
                                       key={i}
                                    >
                                       <button
                                          onClick={(e) => handleDeleteFile(e)}
                                          value={pic}
                                          className={style.deleteButton}
                                       >
                                          Delete
                                       </button>
                                       <img
                                          src={pic}
                                          alt=''
                                          style={{ width: '10vw' }}
                                       />
                                    </ImageListItem>
                                 );
                              })}
                        </Box>
                     </Box>
                     {!controller.button && (
                        <Button
                           style={{ marginTop: '0.5vh' }}
                           color='success'
                           onClick={handleSubmit}
                           variant='contained'
                        >
                           S U B M I T
                        </Button>
                     )}
                     {controller.button && (
                        <Button
                           style={{ marginTop: '0.5vh' }}
                           color='error'
                           variant='contained'
                        >
                           DISABLED
                        </Button>
                     )}
                  </form>
               </div>
            )}
         </>
      );
   }
}

export function validate(product) {
   let controller = {};
   //DESCRIPTION
   if (!product.make) {
      controller.make = 'The make is required';
   }
   if (!product.description) {
      controller.description = 'The description is required';
   } else if (product.description.length > 400) {
      controller.description =
         'The description should not be more than 400 characters';
   }

   if (controller.make || controller.description || !product.description) {
      controller.button = 'button';
   }
   return controller;
}
