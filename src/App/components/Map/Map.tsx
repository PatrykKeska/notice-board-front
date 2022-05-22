import styled from 'styled-components';
import {MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'
import '../../../utils/fix-marker';
import {useContext, useEffect} from "react";
import {SearchContext} from "../../../context/search/search.context";

const Wrapper = styled.div`
  height: calc(100vh - 45px);
  max-width: 100vw;
  background-color: green;
  display: flex;
`


export const Map = () => {
    const {search} = useContext(SearchContext);
useEffect(()=>{
        console.log(`make request to search ${search}`)
    },
    [search])

    return (
        <Wrapper>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
            />
            <MapContainer style={{height: "100%", width: "100%"}} center={[49.683727, 20.3403628]} zoom={13}
                          scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.7118203, 20.3478224]}>
                    <Popup>
                        Our customizable marker!
                    </Popup>
                </Marker>
            </MapContainer>
        </Wrapper>
    )
}