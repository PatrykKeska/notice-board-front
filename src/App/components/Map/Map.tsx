import styled from 'styled-components';
import {MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet'
import '../../../utils/fix-marker';
import {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../context/search/search.context";
import {SimpleAddEntity} from 'types';
import {SingleAd} from "./SingleAd/SingleAd";

const Wrapper = styled.div`
  height: calc(100vh - 45px);
  max-width: 100vw;
  background-color: green;
  display: flex;
`


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAddEntity[]>([]);


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();

            setAds(data);
        })();
    }, [search]);


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

                {ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </Wrapper>
    )
}