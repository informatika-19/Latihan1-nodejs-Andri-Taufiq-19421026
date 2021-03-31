
//const listnilai =['A', 'B', 'C']
//console.log(listnilai[2])

const datamhs =[
{
    nama    :'Ricky tanrean',
    npm     :'19421026',
    prodi   :'Informatika'
},
{
    nama    :'Andri',
    npm     :'19421031',
    prodi   :'Informatika'
},
{
    nama    :'ulul abshar',
    npm     :'19421030',
    prodi   :'Informatika'
}
]
//console.log(datamhs[0].nama)
for (let i in datamhs){
    console.log(datamhs[i].nama + '-' + datamhs[i].npm + '-' + datamhs[i].prodi)
}