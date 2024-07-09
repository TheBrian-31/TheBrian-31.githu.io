import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@nextui-org/react";
import UserCard from "../../components/userCard/UserCard";
import backgroundImage from '../../assets/images/Fondo.jpg';
import QRCodeGenerator from "../../components/qrCodeGenerator/QRCodeGenerator";
import Navbar from '../../components/navbar/Navbar';
import DoorSelector from '../../components/doorSelector/DoorSelector';
import QRCodeScanner from '../../components/qrCodeScanner/QRCodeScanner';

import { useUserContext } from "../../context/userContext";

function HomePage() {
  const { token, user } = useUserContext();
  const componentContainerRef = useRef(null);
  const [currentComponent, setCurrentComponent] = useState("usuario");
  const [rolesCard, setRolesCard] = useState();
  const [ADMNRenderization, setADMNRenderization] = useState(false);
  const [VIGIRenderization, setVIGIRenderization] = useState(false);
  const [parentValue, setParentValue] = useState();

  useEffect(() => {
    if (!user) {
      console.log("No user found");
    } else {
      console.log(user.roles.map(role => role.id));
    
      setRolesCard(user.roles.map(role => role.id));
      if (user.roles.map(role => role.id)) {
        if(user.roles.map(role => role.id).some(rol => ["ADMN"].includes(rol))){
            setADMNRenderization(true);
        } else {
            setADMNRenderization(false);
        }

        if(user.roles.map(role => role.id).some(rol => ["VIGI"].includes(rol))){
            setVIGIRenderization(true);
        } else {
            setVIGIRenderization(false);
        }

    } else {
        console.log('No se encontró el array de roles ');
    }
    }
    renderComponent();
  }, [user]);

  useEffect(() => {
 
    
    if(user){
      console.log(user);
    }
}, [user])

const handleChildValue = (value) => {
  setParentValue(value);
  console.log("Parent value: ", value);
};


  const handleComponent = () => {

    setCurrentComponent(prevComponent => prevComponent === "usuario" ? "vigilante" : "usuario");
    
  };

  useEffect(() => {
 
    renderComponent();
}, [currentComponent,parentValue])

  const renderComponent = () => {
    if (componentContainerRef.current) {
      ReactDOM.unmountComponentAtNode(componentContainerRef.current);
    }
    if (componentContainerRef.current) {
      if (currentComponent === "usuario") {
        ReactDOM.render(<QRCodeGenerator user={user} token={token} />, componentContainerRef.current);
      } else if(currentComponent === "vigilante"){
        ReactDOM.render(<QRCodeScanner doorValue={parentValue} user={user} token={token} />, componentContainerRef.current);
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="saturate-150 bg-cover bg-center h-screen w-full overflow-hidden">
      <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center overflow-auto">
        <div className="flex flex-row items-center w-11/12 justify-end">
          {(ADMNRenderization || VIGIRenderization) && <Button onClick={handleComponent} className="flex bg-white w-5/12 md:w-3/12 h-12 text-purple-500 text-lg" variant="shadow">
            {currentComponent === "usuario" ? "Scannear" : "Generar QR"}
          </Button>}
          {(ADMNRenderization || VIGIRenderization) && <DoorSelector onValueChange={handleChildValue} />}
        </div>
        {user && (
          <UserCard
            name={user.name}
            userEmail={user.email}
            rolesCard={rolesCard}
          />
        )}
        <div ref={componentContainerRef}></div>
        <Navbar />
      </div>
    </div>
  );
}

export default HomePage;