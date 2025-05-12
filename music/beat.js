// General house beat
//$: sound("bd*4, cp ~ cp ~, [~ oh]*4, [hh]*16").bank("RolandTR909").cpm(130/4)

// Techo beat
$: sound("[bd ~]*4").bank("RolandTR909").cpm(130/4).lpf(300)
$: sound("[~ ~ ~ ~ ~ ~ lt ~]*2").bank("RolandTR909").cpm(130/4).lpf(50)
$: sound("~ cp ~ ~").bank("RolandTR909").room(.2).rsize(1).cpm(130/4)
$: sound("[~ ~ wind ~ ~ ~ [wind ~ ~ wind] ~]/2").cpm(130/4).room(.7).rsize(2.5)
_$: sound("[~ oh]*4").cpm(130/4).room(.1).rsize(1).lpf(20000)

$: note("c#").sound("sawtooth").lpf(500).cpm(130/4)
