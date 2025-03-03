const request=require('request')

export default (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFqcm9oaXQiLCJhIjoiY2tkYXV0NWo5M29neDJ0cXI5ajh4OHgwOSJ9.5go5iO_gXHYIZKMqAC32WA&limit=1'

        request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.',undefined)
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            })
        }
    })
}
