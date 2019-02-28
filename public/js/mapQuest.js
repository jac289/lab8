function initMap() {
	// add your code here
	L.mapquest.key = 'CdBATjAHbT7xIjJwh39bjCntYL6rTD5G';

	var map = L.mapquest.map('map', {
		center: [32.88 , -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878854, -117.235911]).addTo(map);
}