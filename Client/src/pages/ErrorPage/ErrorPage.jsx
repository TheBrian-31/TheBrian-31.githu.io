import React, { useState } from 'react';
import {Image} from "@nextui-org/react";
import badRequest from '../../assets/gifs/badRequest.gif';
import comingSoon from '../../assets/gifs/comingSoon.gif';
import conflict from '../../assets/gifs/conflict.gif';
import found from '../../assets/gifs/found.gif';
import internalServerError from '../../assets/gifs/internalServerError.gif';
import methodNotAllowed from '../../assets/gifs/methodNotAllowed.gif';
import notAcceptable from '../../assets/gifs/notAcceptable.gif';
import notAuthorized from '../../assets/gifs/notAuthorized.gif';
import ohno from '../../assets/gifs/ohno.gif';
import workingOn from '../../assets/gifs/workingOn.gif';

const images = [
    
    [badRequest,400, "Bad Request"],
    [comingSoon,"###", "Dentro de poco"],
    [conflict,409, "Conflict"],
    [found ,302, "Found"],
    [internalServerError,500, "Internal Server Error"],
    [methodNotAllowed,405, "Method Not Allowed"],
    [notAcceptable,406, "Not Acceptable"],
    [notAuthorized,401, "Unauthorized"],
    [ohno,404, "Not Found"],
    [workingOn, "###", "Estamos trabajando en ello"],
    // Agrega más URLs de imágenes aquí según sea necesario
  ];
  
function ErrorPage() {
    const [randomIndex, setRandomIndex] = useState(0);

    const incrementCount = () => {
        setRandomIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
  return (
    <div className="flex flex-col  items-center bg-black w-screen h-screen ">
        <h1 className='text-[200px] text-white'>{images[randomIndex][1]}</h1>
        <div className="w-[500] h-[500] overflow-hidden max-w-max">
        <Image
            isBlurred
            width={500}
            src={images[randomIndex][0]}
            alt="NextUI Album Cover"
            className="m-5 object-contain  "
            onClick={incrementCount}
        />
        </div>
        <h2 className='text-[200px] text-white' >{images[randomIndex][2]}</h2>

{/*<img src={images[randomIndex]} alt="Example GIF" />*/}

{/*{images.length > 0 && (
        <img src={images[randomIndex]} alt="Imagen aleatoria" style={{ width: '100%', maxWidth: '400px' }} />
      )}*/}
    </div>
  )
}

export default ErrorPage