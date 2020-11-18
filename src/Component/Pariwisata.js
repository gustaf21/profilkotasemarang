import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
      render(){
          return(
            <div>
              <h1 align="center">Pariwisata Kota Semarang</h1>
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
              <img src="/a.jpg" width="1280" height="480"/>
              <img src="/b.jpeg" width="1280" height="480"/>
              <img src="/p.jpeg" width="1280" height="480"/>
              <img src="/n.jpeg" width="1280" height="480"/>
              <img src="/c.jpg" width="1280" height="480"/>
          </Carousel>
          </div>
             
          )
      }
}

export default Pariwisata;