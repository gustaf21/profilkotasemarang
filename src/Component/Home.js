import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Home extends Component{
    render(){
        return(
            <div>
                    <br/>
                    <h1 align="center">Kota Semarang</h1>
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
                    <Mui.Container fidex>

                        <center>
                            <img src="/p.png" height="300" />
                        </center>
                        <p>
                    Kota Semarang adalah ibu kota Provinsi Jawa Tengah, Indonesia
                    sekaligus kota metropolitan terbesar kelima di Indonesia sesudah
                    Jakarta, Surabaya, Medan, dan Bandung.
                </p>
                <p>
                    <li><b>Luas:</b> 373,8 km²</li>
                    <li><b>Ketinggian:</b> 4 m</li>
                    <li><b>Cuaca:</b> 29 °C, Angin arah Timur dengan kecepatan 5 km/h, Kelembapan 73%</li>
                    <li><b>Provinsi:</b> Jawa Tengah</li>
                    <li><b>Jumlah Kecamatan:</b> 16</li>
                    <li><b>Jumlah Penduduk:</b> 1,556 juta (2010)</li>
                </p>
                </Mui.Container>
                </div>
        )
    }
}

export default Home; 