// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoiamFuaXNseWxvdmUiLCJhIjoiY2oxamg0dnNqMDFoZzMzcWVkYzRoaWZjbyJ9.W51ECxic9Pdmo-XfFBMbHQ';
// Create a map in the div #map
var center = [23.6850, 90.3563];
var zoom = 7;

var map = L.mapbox.map('map').setView(center, zoom);

L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9').addTo(map);


var cssIcon = L.divIcon({
  className: 'css-icon',
  iconSize: [10, 10]
});

L.marker([23.649190, 90.501937], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/15538.pdf"frameborder="0" allowfullscreen></iframe>');

L.marker([22.288975, 91.77426], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9762/6514.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.804083, 90.37512], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1208.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.833268, 90.421429], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/637.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.978965, 90.308055], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/70646.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.924901, 90.307949], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2244.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.045629, 90.237992], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/70457.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.77525, 90.415786], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/21209.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.04925, 90.238695], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9385/4415.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.775547, 90.415657], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1334.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.994269, 90.404357], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/30873.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.949359, 90.27086], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9577/5935.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.645448, 90.488194], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1026.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.03598, 90.253758], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/15538.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.641562, 90.514264], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/631.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.746216, 90.411747], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2224.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.728876, 90.417989], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2290.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.299137, 91.776985], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2298.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.788464, 90.41607], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9436/9154.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.979185, 90.379747], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1851.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.976787, 90.381256], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/13206.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.819851, 90.360052], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/14677.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.79144, 90.374964], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/635.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.291146, 91.775639], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/15924.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.615636, 90.504202], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2320.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.839617, 91.233635], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9463/6510.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.210449, 90.416537], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3649.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.977887, 90.384694], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/8587.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.295853, 91.774708], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9232/5668.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.016036, 90.383435], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9532/4609.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.945757, 91.134682], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/10145.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.788356, 90.415981], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/30116.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.010867, 90.324883], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9337/6496.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.751114, 90.393446], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2349.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.988335, 90.366231], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/575.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.76586, 90.399695], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3860.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.993607, 90.404412], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/701.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.995241, 90.411377], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/613.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.951733, 90.272132], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/4389.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.993305, 90.262111], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2478.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.926934, 90.309712], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/821.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.978965, 90.308055], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/43811.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.338962, 91.809053], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/11867.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.994464, 90.406554], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/9693.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.392887, 91.819513], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3733.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.833604, 89.36772], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/39626.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.750832, 90.397386], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/34577.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.296323, 91.778482], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9233/5694.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.095531, 90.172037], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/14638.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.995195, 90.411414], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/615.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.994501, 90.407989], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/7854.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.651725, 90.58579], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/15541.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.957651, 90.380021], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/793.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.033163, 90.390685], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9575/6722.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.307327, 90.385612], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9504/4998.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.944253, 90.381898], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1969.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.75049, 90.391963], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1911.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.795435, 90.416867], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9538/6374.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.619438, 90.483196], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/18450.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.989133, 90.419783], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1561.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.750822, 90.393405], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/564.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.295043, 91.778461], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9642/5658.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.272805, 91.792612], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9540/5497.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.861122, 90.398231], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/815.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.771735, 90.40434], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1328.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.948949, 90.278327], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/21725.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.191388, 90.441341], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9469/4722.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.895888, 90.399279], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2318.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.384021, 91.865912], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9589/9113.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.187471, 90.424228], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1006.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.267263, 88.751805], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/10147.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.923952, 90.310644], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9465/5692.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.949968, 90.380166], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9449/5094.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.187565, 90.427098], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5668.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.037793, 90.25511], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3983.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.911157, 90.302662], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1775.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.939355, 90.302122], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9622/6202.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.954216, 90.373879], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/743.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.875696, 90.308357], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3897.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.909695, 90.289448], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/932.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.293978, 91.782416], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9643/5660.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.293628, 91.777425], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9587/6253.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.993767, 90.25511], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1016.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.195695, 90.406912], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1961.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.270422, 91.78911], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/10909/4176.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.997225, 90.382705], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2262.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.784507, 90.565371], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5894.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.887805, 90.318429], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1797.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.35816, 91.771639], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3603.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.645448, 90.488194], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1026.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.790321, 90.375056], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5662.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.676818, 90.523015], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9470/5602.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.010603, 90.248795], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/11095/5155.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.79363, 90.267599], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/416.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.292928, 91.781136], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1987.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.926768, 90.304131], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5135.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.876079, 90.3901], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/823.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.192896, 90.452961], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2382.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.788365, 90.415996], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/693.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.943257, 90.303948], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2551.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.988779, 90.320948], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1181.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.921344, 90.392839], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/16231.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.950386, 90.381389], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3347.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.77211, 90.558211], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3339.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.746899, 90.397835], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/7190.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.923925, 90.277932], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/10046/5016.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.03186, 90.270163], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/11846.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.03598, 90.253758], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/15538.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.898725, 90.404039], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3377.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.405391, 91.818245], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2553.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([91.818245, 90.416867], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3649.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.051137, 90.234238], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/7820.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.941301, 90.293412], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9227/4910.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.38037, 90.377703], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3870.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.361478, 91.772913], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2444.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.292621, 90.394306], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/12142/8931.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.963071, 90.396263], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/10764.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.907412, 90.321661], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/9568.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.913357, 90.317645], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/19924.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.898708, 90.358236], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/47563.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.871025, 90.383744], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/51831.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.731356, 23.731356], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/21167.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.382276, 91.864723], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/19841.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.199707, 90.439228], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/31373.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.820016, 90.36429], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/735.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.165166, 90.428647], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/6858.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.188804, 90.487904], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/32082.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.295693, 91.777334], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/12143/4308.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.957666, 90.381888], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/20807.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.998005, 90.321983], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/32606.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.79222, 90.424264], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/52858.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.392541, 91.820367], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/87036.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.964751, 90.398756], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/31972.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.942055, 90.383454], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/52695.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.797852, 90.401599], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/16350.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.004317, 90.321235], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/32110.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.44399, 91.183042], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/56264.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.090052, 90.370542], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/71347.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.807327, 90.258692], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/87943.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.672295, 90.527776], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/84111.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.654752, 90.511634], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/59621.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.898708, 90.358236], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/47563.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.783688, 90.417233], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/11261/4895.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.935927, 90.29628], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/817.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.893453, 90.427364], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9276/4933.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.771735, 90.40434], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/20120.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.750658, 90.391918], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3565.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.291146, 91.775639], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/47583.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.641562, 90.514264], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/631.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.935976, 90.296674], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1114.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.612987, 90.481777], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/7322.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.051867, 90.23545], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/1053.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.025874, 90.385869], {icon: cssIcon}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/9575/6722.pdf" frameborder="0" allowfullscreen></iframe>');
 

var cssIcony = L.divIcon({
  className: 'css-icony',
  iconSize: [10, 10]
});

L.marker([23.793002, 90.260302], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/12868.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.783336, 90.35191], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/891.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.909737, 90.303648], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/6009.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.932599, 90.300125], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/10015.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.901258, 90.326586], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/8617.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.008754, 90.32584], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5730.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.999108, 90.251208], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/6898.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.94014, 90.309418], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3987.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.943257, 90.303948], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/5873.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([24.038747, 90.258751], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2256.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.977887, 90.384694], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/10627.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.940063, 90.299914], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/11661/5664.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.6417, 90.514264], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/629.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.924901, 90.307949], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2372.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.936797, 90.371415], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/2564.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.897373, 90.574047], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/3452.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.924187, 90.392375], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/42653.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.681164, 90.517069], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/57427.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([22.373933, 91.814015], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/AllianceAuditReports/11098/4778.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.931963, 90.306708], {icon: cssIcony}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/907.pdf" frameborder="0" allowfullscreen></iframe>');
 

var cssIconblue = L.divIcon({
  className: 'css-iconblue',
  iconSize: [10, 10]
});

L.marker([23.751114, 90.393446], {icon: cssIconblue}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/4923.pdf" frameborder="0" allowfullscreen></iframe>');
 
L.marker([23.905569, 90.051761], {icon: cssIconblue}).addTo(map)
.bindPopup('<iframe width="280" height="158" src="http://accord.fairfactories.org/accord_bgd_files/1/Audit_Files/7995.pdf" frameborder="0" allowfullscreen></iframe>');
 

var cssIconblack = L.divIcon({
  className: 'css-iconblack',
  iconSize: [10, 10]
});

L.marker([23.769639, 90.402106], {icon: cssIconblack}).addTo(map) 
L.marker([24.363745, 90.38337], {icon: cssIconblack}).addTo(map) 
L.marker([23.676835, 90.526872], {icon: cssIconblack}).addTo(map) 
L.marker([24.090543, 90.367627], {icon: cssIconblack}).addTo(map) 
L.marker([23.751162, 90.547646], {icon: cssIconblack}).addTo(map) 
L.marker([23.734067, 90.385155], {icon: cssIconblack}).addTo(map) 
L.marker([24.019383, 90.300346], {icon: cssIconblack}).addTo(map) 
L.marker([24.20824, 90.418993], {icon: cssIconblack}).addTo(map) 
L.marker([23.989322, 90.2584], {icon: cssIconblack}).addTo(map) 
L.marker([23.766087, 90.405555], {icon: cssIconblack}).addTo(map) 
L.marker([22.993304, 90.777253], {icon: cssIconblack}).addTo(map) 
L.marker([23.939766, 90.385537], {icon: cssIconblack}).addTo(map) 
L.marker([23.817545, 90.365922], {icon: cssIconblack}).addTo(map) 
L.marker([23.9801, 90.307732], {icon: cssIconblack}).addTo(map) 
L.marker([24.085391, 90.359424], {icon: cssIconblack}).addTo(map) 
L.marker([23.969868, 90.320813], {icon: cssIconblack}).addTo(map) 
L.marker([23.705752, 90.44765], {icon: cssIconblack}).addTo(map) 
L.marker([24.198498, 90.485698], {icon: cssIconblack}).addTo(map) 
L.marker([23.804083, 90.37512], {icon: cssIconblack}).addTo(map) 
L.marker([23.895738, 90.341837], {icon: cssIconblack}).addTo(map) 
L.marker([23.926663, 90.311602], {icon: cssIconblack}).addTo(map) 
L.marker([23.985837, 90.357521], {icon: cssIconblack}).addTo(map) 
L.marker([23.940238, 90.308581], {icon: cssIconblack}).addTo(map) 
L.marker([23.89553, 90.3262], {icon: cssIconblack}).addTo(map) 
L.marker([23.921235, 90.386348], {icon: cssIconblack}).addTo(map) 
L.marker([23.943546, 90.304236], {icon: cssIconblack}).addTo(map) 
L.marker([24.024563, 90.285631], {icon: cssIconblack}).addTo(map) 
L.marker([23.771735, 90.40434], {icon: cssIconblack}).addTo(map) 
L.marker([23.896785, 90.431794], {icon: cssIconblack}).addTo(map) 
L.marker([22.367587, 91.820749], {icon: cssIconblack}).addTo(map) 
L.marker([23.746098, 90.392953], {icon: cssIconblack}).addTo(map) 
L.marker([23.769907, 90.40729], {icon: cssIconblack}).addTo(map) 
L.marker([23.780143, 90.367263], {icon: cssIconblack}).addTo(map) 
L.marker([26.030274, 88.470356], {icon: cssIconblack}).addTo(map) 
L.marker([23.936633, 90.39183], {icon: cssIconblack}).addTo(map) 
L.marker([23.89527, 90.32444], {icon: cssIconblack}).addTo(map) 


