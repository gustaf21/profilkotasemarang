import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
      render(){
          return(
            <div>
              <h1 align="center">Pemerintah Kota Semarang</h1>
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
                    <center>
                  <table class="" style="color:white;" border="0">
                      <tbody>
                      <tr style="border-top: 2px solid white;">
                          <td width="8px" class="text-left" style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Daring</b></td>
                          <td width="1px" class="text-left" style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td width="120px" class="text-right" style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-right:31px;">24</td>
                        
                      </tr>
                      <tr style="border-top: 2px solid white;">
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Hari ini</b></td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-right:31px;" class="text-right">743</td>
                      </tr>
                      <tr style="border-top: 2px solid white;">
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Kemarin</b></td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td class="text-right" style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-right:31px;">1</td>
                      </tr>
                      <tr style="border-top: 2px solid white;">
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Minggu</b></td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-right:31px;" class="text-right" >4.467</td>
                      </tr>
                      <tr style="border-top: 2px solid white;">
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Bulan</b></td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td class="text-right" style="color:white;padding-top:6px;padding-bottom:6px;padding-right:31px;">25.710</td>
                      </tr>
                      <tr style="border-top: 2px solid white;">
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;"><b>Tahun</b></td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-left:11px;">:</td>
                          <td style="color:white;padding-top:6px;padding-bottom:6px;padding-right:11px;padding-right:31px;" class="text-right" >637.128</td>
                      </tr>
                      <tr>
                          <td style="color:white;"><b>Total</b></td>
                          <td style="color:white;">:</td>
                          <td class="text-right" style="color:white;">637.128</td>
                      </tr>
                  </tbody>
                </table>
                </center>

          </div>
             
          )
      }
}

export default Pariwisata;