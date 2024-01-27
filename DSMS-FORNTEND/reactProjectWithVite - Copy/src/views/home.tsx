import React, { useEffect, useState } from "react";
import Card from '../components/card/card';
import axios from 'axios';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import SkeletonText from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "../layout/header";
import Footer from "../layout/footer";

interface Data {
  title: string;
  count: number|string;
}


const containerStyle = {
  width: '1000px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
function Home(): JSX.Element {

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    getCustomerCount();
    getBranchCount();
    getRiderCount();
  }, []);

  const getCustomerCount = () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get('http://localhost:8097/customer/count', { headers: headers })
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getBranchCount = () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get('http://localhost:8097/branch/count', { headers: headers })
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getRiderCount = () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.get('http://localhost:8097/rider/count', { headers: headers })
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Google Map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC6NVB9RG-YofCGa_eKw8nPXe1TXZWnJGQ"
  });

  if (loadError) {
    return <div>Error loading Google Maps API: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <section>
      <Header />
      <div>
        <h1 className="m-5 text-xl font-bold text-gray-600">Home</h1>
      </div>
      <div>
        <div className={'grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

          <Card title="Customer "
            count={data} />

          <Card title="Branch "
            count={data} />

          <Card title="Rider "
            count={data} />

        </div>
        <div className="grid w-fit relative m-auto">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
          </GoogleMap>
        </div>

      </div>
      <Footer />
    </section>
  );

}


export default Home