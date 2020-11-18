import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
      render(){
          return(
            <div>
              <h1 align="center">Sejarah Kota Semarang</h1>
              <br/>
              <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Pemerintahan">Pemerintah</Mui.Button>
                        <Mui.Button href="/Kuliner">Kuliner</Mui.Button>
                       
                    </Mui.ButtonGroup>
                    <hr/>
                    </center>
                    <img src="/h.jpg" width="1280" height="480"/>
                    <h1 align="center">Sejarah Kota Semarang</h1>
                    <p align="justify"> Sejarah Kota Semarang adalah ibukota Provinsi Jawa Tengah, Indonesia. Kota Semarang merupakan salah satu kota besar dengan jumlah penduduk yang padat sekitar 2 juta jiwa. Kota Semarang merupakan kota metropolis yang ditandai dengan semakin banyak dan tingginya gedung pencakar langit yang ada di Semarang. (Baca juga: Sejarah Candi Kalasan)

Semarang memiliki dua dataran yakni dataran tinggi dan dataran rendah. Dataran rendah merupakan kawasan yang sempit dan berjarak kurang lebih 4 Km dari garis pantai atau disebut kota bawah. Dataran yang rendah memungkinkan datangnya bencana kiriman seperti banjir. Sejumlah kawasan yang berada di daerah dataran rendah ini jarang terdapat pemukiman. Sedangkan dataran tinggi berkembang menjadi pusat aglomerasi penduduk atau kota atas. Banyak aktivitas di kawasan ini, sehingga banyak penduduk yang bermukim di kawasan ini. Dengan banyaknya fasilitas yang menunjang membuat kawasan ini padat dengan perumahan penduduk. Tak hanya perumahan, pusat perbelanjaan, hotel, fasilitas pendidikan, transportasi, dan lain-lain.Sejarah Kota Semarang dimulai pada abad ke-6, mulanya Semarang merupakan bagian kawasan Kerajaan Mataram Kuno dengan nama Pragota (kini menjadi Bergota). Dahulu daerah ini merupakan pelabuhan dengan gugusan pulau kecil di depannya akibat pengendapan, gugusan pulau kecil itu akhirnya meluas sehingga membuat sebuah kawasan baru yang kini disebut sebagai kota bawah.Pada abad ke-15 masehi, seorang utusan Kerajaan Demak Pangeran Made Pandan menyebarkan islam dari perbukitan Pragota. Seiring berjalannya waktu, wilayah tersebut menjadi subur dan di tanami pohon asam yang arang (bahada jawa “Asem Areng”) kemudian menjadi cikal bakal nama “Semarang”.

Setelah Kyai Ageng Pandan Arang meninggal dan digantikan oleh putranya yang bergelar Pandan Arang II Kota Semarang mengalami kemajuan yang pesat. Dengan alasan persyaratan peningkatan daerah dapat dipenuhi, bertepatan pada tanggal 2 Mei 1547 daerah Semarang berganti menjadi setingkat dengan kabupaten. Yang kemudian pada tanggal 2 Mei selalu diperingatai sebagai hari jadi Kota Semarang. </p>

          </div>
             
          )
      }
}

export default Pariwisata;