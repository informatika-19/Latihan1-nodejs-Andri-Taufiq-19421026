const nilai = 20
let predikat, keterangan = ''

if (nilai >= 85){
predikat = ' A'
keterangan = 'Sangat Baik'

}else if
(nilai >= 75){
predikat = ' B'
keterangan = 'Baik'

}else if
(nilai >= 65){
predikat = ' C'
keterangan = 'Cukup'

}else if
(nilai >= 55){
predikat = ' D'
keterangan = 'Kurang'

}else{
predikat = ' E'
keterangan = 'Sangat Kurang'
}

console.log('Predikat =' + predikat +'('+keterangan+')')

