export const getGeoCode = async (address: string): Promise<{
    lat: number;
    lon: number;
}> => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    const geoData = await response.json();
    const lat = parseFloat(geoData[0].lat)
    const lon = parseFloat(geoData[0].lon)
    return {lat, lon}
}
