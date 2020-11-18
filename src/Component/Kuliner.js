import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
      render(){
          return(
            <div>
              <h1 align="center">Kuliner Kota Semarang</h1>
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
                    <Carousel>
              <img src="/w.jpeg" width="1280" height="480"/>
              <img src="/q.jpg" width="1280" height="480"/>
              <img src="/e.jpg" width="1280" height="480"/>
              <img src="/r.jpg" width="1280" height="480"/>
              <img src="/t.jpg" width="1280" height="480"/>
          </Carousel>
            <hr/>
            <center>
            <h4 >TAHU GIMBAL</h4>
            <p >Tahu gimbal diperkiran sudah menjadi makanan khas masyarakat Semarang sejak abad ke-19, pada awalnya menggunakan tahu dengan jenis tahu “pong” yaitu tahu yang kosong di bagian dalamnya dan akan mengembang jika digoreng secara matang.</p>
           <hr/>
            <h4>Nasi Goreng</h4>
            <p>
Nasi goreng adalah salah satu makanan populer di negara kita. Tidak susah menemukan penjual nasi goreng karena ada di mana-mana. Tidak hanya itu, nasi goreng juga mudah untuk disajikan, bahkan di rumah pun sering menjadi menu sarapan.</p>
            <hr/>
            <h4>SOTO</h4>
            <p>Menurut Dennys Lombard (Nusa Jawa: Silang Budaya), jelas ditulis dibuku tersebut asal mula Soto adalah makanan Cina bernama Caudo, pertama kali populer di wilayah Semarang. Dari Caudo lambat laun menjadi Soto, klop bukan? Orang Makassar menyebutnya Coto, dan orang Pekalongan menyebutnya Tauto.

Makanan yang asalnya juga khas Cina ini telah menjadi bagian dari makanan masyarakat Indonesia. Dengan menyesuaikan olahan bumbu agar pas dengan lidah orang Indonesia, lahirlah kemudian Soto Semarang, Soto Kudus, Soto Madura, Soto Bangkong, dan sebagainya.</p>
            <hr/>
            <h4>Lumpia</h4>
            <p>Lumpia menjadi makanan khas Semarang bermula dari perkawinan kuliner Tiongkok dan Jawa sejak ratusan lalu. ... Dirangkum dari banyak sumber, makanan khas kota Semarang ini hadir pertama kali pada abad ke 19 dan merupakan salah satu contoh perpaduan budaya asli Tiong Hoa-Jawa yang serasi dalam cita rasa.</p>
            <hr/>
            <h4>Nasi Ayam</h4>
            <p>makanan dengan isi berupa nasi liwet, telur rebus, dan suwiran ayam yang diberi kuah opor serta tambahan sambal goreng jipan. Sekilas memang mirip dengan nasi liwetnya Solo, namun nasi ayam ini biasa disajikan dengan tambahan sate telur puyuh, satu usus, dan teh hangat. Perbedaan lainnya adalah nasi liwet menggunakan kuah areh, sedangkan nasi ayam memakai kuah opor kuning. Untuk penyajiannya cukup sederhana, yakni hanya berada di atas piring yang telah diberi alas dari daun pisang dengan isian seperti yang telah disebutkan seperti di atas.</p>
            </center>
          </div>
             
          )
      }
}

export default Pariwisata;