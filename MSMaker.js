var Array1 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array2 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array3 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array4 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array5 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array6 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array7 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array8 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array9 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Array10 = ["bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0,"bomb",0,0,0,0];
var Score = 0;

function RandomizeTime()
{
  for(var r=0;r<40;r++)
  {
    for(var j=0;j<Array1.length-2;j++)
    {
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array1[j];
        Array1[j] = Array1[j+1];
        Array1[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array1[19];
        Array1[19] = Array1[0];
        Array1[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array1[j];
        Array1[j] = Array1[j-1];
        Array1[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array1[0];
        Array1[0] = Array1[19];
        Array1[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array2[j];
        Array2[j] = Array2[j+1];
        Array2[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array2[19];
        Array2[19] = Array2[0];
        Array2[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array2[j];
        Array2[j] = Array2[j-1];
        Array2[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array2[0];
        Array2[0] = Array2[19];
        Array2[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array3[j];
        Array3[j] = Array3[j+1];
        Array3[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array3[19];
        Array3[19] = Array3[0];
        Array3[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array3[j];
        Array3[j] = Array3[j-1];
        Array3[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array3[0];
        Array3[0] = Array3[19];
        Array3[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array4[j];
        Array4[j] = Array4[j+1];
        Array4[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array4[19];
        Array4[19] = Array4[0];
        Array4[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array4[j];
        Array4[j] = Array4[j-1];
        Array4[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array4[0];
        Array4[0] = Array4[19];
        Array4[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array5[j];
        Array5[j] = Array5[j+1];
        Array5[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array5[19];
        Array5[19] = Array5[0];
        Array5[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array5[j];
        Array5[j] = Array5[j-1];
        Array5[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array5[0];
        Array5[0] = Array5[19];
        Array5[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array6[j];
        Array6[j] = Array6[j+1];
        Array6[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array6[19];
        Array6[19] = Array6[0];
        Array6[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array6[j];
        Array6[j] = Array6[j-1];
        Array6[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array6[0];
        Array6[0] = Array6[19];
        Array6[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array7[j];
        Array7[j] = Array7[j+1];
        Array7[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array7[19];
        Array7[19] = Array7[0];
        Array7[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array7[j];
        Array7[j] = Array7[j-1];
        Array7[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array7[0];
        Array7[0] = Array7[19];
        Array7[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array8[j];
        Array8[j] = Array8[j+1];
        Array8[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array8[19];
        Array8[19] = Array8[0];
        Array8[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array8[j];
        Array8[j] = Array8[j-1];
        Array8[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array8[0];
        Array8[0] = Array8[19];
        Array8[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array9[j];
        Array9[j] = Array9[j+1];
        Array9[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array9[19];
        Array9[19] = Array9[0];
        Array9[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array9[j];
        Array9[j] = Array9[j-1];
        Array9[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array9[0];
        Array9[0] = Array9[19];
        Array9[19] = place;
      }
      var x = Math.random();
      if(x > 0.5 & j<=18)
      {
        var place = Array10[j];
        Array10[j] = Array10[j+1];
        Array10[j+1] = place;
      }
      if(x > 0.5 & j==19)
      {
        var place = Array10[19];
        Array10[19] = Array10[0];
        Array10[0] = place;
      }
      if(x < 0.5 & j>0)
      {
        var place = Array10[j];
        Array10[j] = Array10[j-1];
        Array10[j-1] = place;
      }
      if(x < 0.5 & j==0)
      {
        var place = Array10[0];
        Array10[0] = Array10[19];
        Array10[19] = place;
      }
    }
  }
  BombCheck();
}

function BombCheck()
{
  if(Array1[0]!="bomb")
  {
    if(Array1[1]=="bomb"){Array1[0]=Array1[0]+1;}
    if(Array2[0]=="bomb"){Array1[0]=Array1[0]+1;}
    if(Array2[1]=="bomb"){Array1[0]=Array1[0]+1;}
  }
  if(Array1[1]!="bomb")
  {
    if(Array1[0]=="bomb"){Array1[1]=Array1[1]+1;}
    if(Array1[2]=="bomb"){Array1[1]=Array1[1]+1;}
    if(Array2[0]=="bomb"){Array1[1]=Array1[1]+1;}
    if(Array2[1]=="bomb"){Array1[1]=Array1[1]+1;}
    if(Array2[2]=="bomb"){Array1[1]=Array1[1]+1;}
  }
  if(Array1[2]!="bomb")
  {
    if(Array1[1]=="bomb"){Array1[2]=Array1[2]+1;}
    if(Array1[3]=="bomb"){Array1[2]=Array1[2]+1;}
    if(Array2[1]=="bomb"){Array1[2]=Array1[2]+1;}
    if(Array2[2]=="bomb"){Array1[2]=Array1[2]+1;}
    if(Array2[3]=="bomb"){Array1[2]=Array1[2]+1;}
  }
  if(Array1[3]!="bomb")
  {
    if(Array1[2]=="bomb"){Array1[3]=Array1[3]+1;}
    if(Array1[4]=="bomb"){Array1[3]=Array1[3]+1;}
    if(Array2[2]=="bomb"){Array1[3]=Array1[3]+1;}
    if(Array2[3]=="bomb"){Array1[3]=Array1[3]+1;}
    if(Array2[4]=="bomb"){Array1[3]=Array1[3]+1;}
  }
  if(Array1[4]!="bomb")
  {
    if(Array1[3]=="bomb"){Array1[4]=Array1[4]+1;}
    if(Array1[5]=="bomb"){Array1[4]=Array1[4]+1;}
    if(Array2[3]=="bomb"){Array1[4]=Array1[4]+1;}
    if(Array2[4]=="bomb"){Array1[4]=Array1[4]+1;}
    if(Array2[5]=="bomb"){Array1[4]=Array1[4]+1;}
  }
  if(Array1[5]!="bomb")
  {
    if(Array1[4]=="bomb"){Array1[5]=Array1[5]+1;}
    if(Array1[6]=="bomb"){Array1[5]=Array1[5]+1;}
    if(Array2[4]=="bomb"){Array1[5]=Array1[5]+1;}
    if(Array2[5]=="bomb"){Array1[5]=Array1[5]+1;}
    if(Array2[6]=="bomb"){Array1[5]=Array1[5]+1;}
  }
  if(Array1[6]!="bomb")
  {
    if(Array1[5]=="bomb"){Array1[6]=Array1[6]+1;}
    if(Array1[7]=="bomb"){Array1[6]=Array1[6]+1;}
    if(Array2[5]=="bomb"){Array1[6]=Array1[6]+1;}
    if(Array2[6]=="bomb"){Array1[6]=Array1[6]+1;}
    if(Array2[7]=="bomb"){Array1[6]=Array1[6]+1;}
  }
  if(Array1[7]!="bomb")
  {
    if(Array1[6]=="bomb"){Array1[7]=Array1[7]+1;}
    if(Array1[8]=="bomb"){Array1[7]=Array1[7]+1;}
    if(Array2[6]=="bomb"){Array1[7]=Array1[7]+1;}
    if(Array2[7]=="bomb"){Array1[7]=Array1[7]+1;}
    if(Array2[8]=="bomb"){Array1[7]=Array1[7]+1;}
  }
  if(Array1[8]!="bomb")
  {
    if(Array1[7]=="bomb"){Array1[8]=Array1[8]+1;}
    if(Array1[9]=="bomb"){Array1[8]=Array1[8]+1;}
    if(Array2[7]=="bomb"){Array1[8]=Array1[8]+1;}
    if(Array2[8]=="bomb"){Array1[8]=Array1[8]+1;}
    if(Array2[9]=="bomb"){Array1[8]=Array1[8]+1;}
  }
  if(Array1[9]!="bomb")
  {
    if(Array1[8]=="bomb"){Array1[9]=Array1[9]+1;}
    if(Array1[10]=="bomb"){Array1[9]=Array1[9]+1;}
    if(Array2[8]=="bomb"){Array1[9]=Array1[9]+1;}
    if(Array2[9]=="bomb"){Array1[9]=Array1[9]+1;}
    if(Array2[10]=="bomb"){Array1[9]=Array1[9]+1;}
  }
  if(Array1[10]!="bomb")
  {
    if(Array1[9]=="bomb"){Array1[10]=Array1[10]+1;}
    if(Array1[11]=="bomb"){Array1[10]=Array1[10]+1;}
    if(Array2[9]=="bomb"){Array1[10]=Array1[10]+1;}
    if(Array2[10]=="bomb"){Array1[10]=Array1[10]+1;}
    if(Array2[11]=="bomb"){Array1[10]=Array1[10]+1;}
  }
  if(Array1[11]!="bomb")
  {
    if(Array1[10]=="bomb"){Array1[11]=Array1[11]+1;}
    if(Array1[12]=="bomb"){Array1[11]=Array1[11]+1;}
    if(Array2[10]=="bomb"){Array1[11]=Array1[11]+1;}
    if(Array2[11]=="bomb"){Array1[11]=Array1[11]+1;}
    if(Array2[12]=="bomb"){Array1[11]=Array1[11]+1;}
  }
  if(Array1[12]!="bomb")
  {
    if(Array1[11]=="bomb"){Array1[12]=Array1[12]+1;}
    if(Array1[13]=="bomb"){Array1[12]=Array1[12]+1;}
    if(Array2[11]=="bomb"){Array1[12]=Array1[12]+1;}
    if(Array2[12]=="bomb"){Array1[12]=Array1[12]+1;}
    if(Array2[13]=="bomb"){Array1[12]=Array1[12]+1;}
  }
  if(Array1[13]!="bomb")
  {
    if(Array1[12]=="bomb"){Array1[13]=Array1[13]+1;}
    if(Array1[14]=="bomb"){Array1[13]=Array1[13]+1;}
    if(Array2[12]=="bomb"){Array1[13]=Array1[13]+1;}
    if(Array2[13]=="bomb"){Array1[13]=Array1[13]+1;}
    if(Array2[14]=="bomb"){Array1[13]=Array1[13]+1;}
  }
  if(Array1[14]!="bomb")
  {
    if(Array1[13]=="bomb"){Array1[14]=Array1[14]+1;}
    if(Array1[15]=="bomb"){Array1[14]=Array1[14]+1;}
    if(Array2[13]=="bomb"){Array1[14]=Array1[14]+1;}
    if(Array2[14]=="bomb"){Array1[14]=Array1[14]+1;}
    if(Array2[15]=="bomb"){Array1[14]=Array1[14]+1;}
  }
  if(Array1[15]!="bomb")
  {
    if(Array1[14]=="bomb"){Array1[15]=Array1[15]+1;}
    if(Array1[16]=="bomb"){Array1[15]=Array1[15]+1;}
    if(Array2[14]=="bomb"){Array1[15]=Array1[15]+1;}
    if(Array2[15]=="bomb"){Array1[15]=Array1[15]+1;}
    if(Array2[16]=="bomb"){Array1[15]=Array1[15]+1;}
  }
  if(Array1[16]!="bomb")
  {
    if(Array1[15]=="bomb"){Array1[16]=Array1[16]+1;}
    if(Array1[17]=="bomb"){Array1[16]=Array1[16]+1;}
    if(Array2[15]=="bomb"){Array1[16]=Array1[16]+1;}
    if(Array2[16]=="bomb"){Array1[16]=Array1[16]+1;}
    if(Array2[17]=="bomb"){Array1[16]=Array1[16]+1;}
  }
  if(Array1[17]!="bomb")
  {
    if(Array1[16]=="bomb"){Array1[17]=Array1[17]+1;}
    if(Array1[18]=="bomb"){Array1[17]=Array1[17]+1;}
    if(Array2[16]=="bomb"){Array1[17]=Array1[17]+1;}
    if(Array2[17]=="bomb"){Array1[17]=Array1[17]+1;}
    if(Array2[18]=="bomb"){Array1[17]=Array1[17]+1;}
  }
  if(Array1[18]!="bomb")
  {
    if(Array1[17]=="bomb"){Array1[18]=Array1[18]+1;}
    if(Array1[19]=="bomb"){Array1[18]=Array1[18]+1;}
    if(Array2[17]=="bomb"){Array1[18]=Array1[18]+1;}
    if(Array2[18]=="bomb"){Array1[18]=Array1[18]+1;}
    if(Array2[19]=="bomb"){Array1[18]=Array1[18]+1;}
  }
  if(Array1[19]!="bomb")
  {
    if(Array1[18]=="bomb"){Array1[19]=Array1[19]+1;}
    if(Array2[18]=="bomb"){Array1[19]=Array1[19]+1;}
    if(Array2[19]=="bomb"){Array1[19]=Array1[19]+1;}
  }
  //Break
  //Break
  if(Array2[0]!="bomb")
  {
    if(Array1[0]=="bomb"){Array2[0]=Array2[0]+1;}
    if(Array1[1]=="bomb"){Array2[0]=Array2[0]+1;}
    if(Array2[1]=="bomb"){Array2[0]=Array2[0]+1;}
    if(Array3[0]=="bomb"){Array2[0]=Array2[0]+1;}
    if(Array3[1]=="bomb"){Array2[0]=Array2[0]+1;}
  }
  if(Array2[1]!="bomb")
  {
    if(Array1[0]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array1[1]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array1[2]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array2[0]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array2[2]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array3[0]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array3[1]=="bomb"){Array2[1]=Array2[1]+1;}
    if(Array3[2]=="bomb"){Array2[1]=Array2[1]+1;}
  }
  if(Array2[2]!="bomb")
  {
    if(Array1[1]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array1[2]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array1[3]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array2[1]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array2[3]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array3[1]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array3[2]=="bomb"){Array2[2]=Array2[2]+1;}
    if(Array3[3]=="bomb"){Array2[2]=Array2[2]+1;}
  }
  if(Array2[3]!="bomb")
  {
    if(Array1[2]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array1[3]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array1[4]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array2[2]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array2[4]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array3[2]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array3[3]=="bomb"){Array2[3]=Array2[3]+1;}
    if(Array3[4]=="bomb"){Array2[3]=Array2[3]+1;}
  }
  if(Array2[4]!="bomb")
  {
    if(Array1[3]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array1[4]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array1[5]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array2[3]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array2[5]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array3[3]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array3[4]=="bomb"){Array2[4]=Array2[4]+1;}
    if(Array3[5]=="bomb"){Array2[4]=Array2[4]+1;}
  }
  if(Array2[5]!="bomb")
  {
    if(Array1[4]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array1[5]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array1[6]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array2[4]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array2[6]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array3[4]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array3[5]=="bomb"){Array2[5]=Array2[5]+1;}
    if(Array3[6]=="bomb"){Array2[5]=Array2[5]+1;}
  }
  if(Array2[6]!="bomb")
  {
    if(Array1[5]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array1[6]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array1[7]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array2[5]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array2[7]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array3[5]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array3[6]=="bomb"){Array2[6]=Array2[6]+1;}
    if(Array3[7]=="bomb"){Array2[6]=Array2[6]+1;}
  }
  if(Array2[7]!="bomb")
  {
    if(Array1[6]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array1[7]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array1[8]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array2[6]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array2[8]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array3[6]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array3[7]=="bomb"){Array2[7]=Array2[7]+1;}
    if(Array3[8]=="bomb"){Array2[7]=Array2[7]+1;}
  }
  if(Array2[8]!="bomb")
  {
    if(Array1[7]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array1[8]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array1[9]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array2[7]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array2[9]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array3[7]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array3[8]=="bomb"){Array2[8]=Array2[8]+1;}
    if(Array3[9]=="bomb"){Array2[8]=Array2[8]+1;}
  }
  if(Array2[9]!="bomb")
  {
    if(Array1[8]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array1[9]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array1[10]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array2[8]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array2[10]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array3[8]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array3[9]=="bomb"){Array2[9]=Array2[9]+1;}
    if(Array3[10]=="bomb"){Array2[9]=Array2[9]+1;}
  }
  if(Array2[10]!="bomb")
  {
    if(Array1[9]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array1[10]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array1[11]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array2[9]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array2[11]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array3[9]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array3[10]=="bomb"){Array2[10]=Array2[10]+1;}
    if(Array3[11]=="bomb"){Array2[10]=Array2[10]+1;}
  }
  if(Array2[11]!="bomb")
  {
    if(Array1[10]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array1[11]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array1[12]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array2[10]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array2[12]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array3[10]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array3[11]=="bomb"){Array2[11]=Array2[11]+1;}
    if(Array3[12]=="bomb"){Array2[11]=Array2[11]+1;}
  }
  if(Array2[12]!="bomb")
  {
    if(Array1[11]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array1[12]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array1[13]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array2[11]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array2[13]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array3[11]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array3[12]=="bomb"){Array2[12]=Array2[12]+1;}
    if(Array3[13]=="bomb"){Array2[12]=Array2[12]+1;}
  }
  if(Array2[13]!="bomb")
  {
    if(Array1[12]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array1[13]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array1[14]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array2[12]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array2[14]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array3[12]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array3[13]=="bomb"){Array2[13]=Array2[13]+1;}
    if(Array3[14]=="bomb"){Array2[13]=Array2[13]+1;}
  }
  if(Array2[14]!="bomb")
  {
    if(Array1[13]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array1[14]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array1[15]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array2[13]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array2[15]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array3[13]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array3[14]=="bomb"){Array2[14]=Array2[14]+1;}
    if(Array3[15]=="bomb"){Array2[14]=Array2[14]+1;}
  }
  if(Array2[15]!="bomb")
  {
    if(Array1[14]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array1[15]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array1[16]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array2[14]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array2[16]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array3[14]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array3[15]=="bomb"){Array2[15]=Array2[15]+1;}
    if(Array3[16]=="bomb"){Array2[15]=Array2[15]+1;}
  }
  if(Array2[16]!="bomb")
  {
    if(Array1[15]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array1[16]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array1[17]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array2[15]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array2[17]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array3[15]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array3[16]=="bomb"){Array2[16]=Array2[16]+1;}
    if(Array3[17]=="bomb"){Array2[16]=Array2[16]+1;}
  }
  if(Array2[17]!="bomb")
  {
    if(Array1[16]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array1[17]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array1[18]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array2[16]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array2[18]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array3[16]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array3[17]=="bomb"){Array2[17]=Array2[17]+1;}
    if(Array3[18]=="bomb"){Array2[17]=Array2[17]+1;}
  }
  if(Array2[18]!="bomb")
  {
    if(Array1[17]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array1[18]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array1[19]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array2[17]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array2[19]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array3[17]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array3[18]=="bomb"){Array2[18]=Array2[18]+1;}
    if(Array3[19]=="bomb"){Array2[18]=Array2[18]+1;}
  }
  if(Array2[19]!="bomb")
  {
    if(Array1[18]=="bomb"){Array2[19]=Array2[19]+1;}
    if(Array1[19]=="bomb"){Array2[19]=Array2[19]+1;}
    if(Array2[18]=="bomb"){Array2[19]=Array2[19]+1;}
    if(Array3[18]=="bomb"){Array2[19]=Array2[19]+1;}
    if(Array3[19]=="bomb"){Array2[19]=Array2[19]+1;}
  }
  //Break
  //Break
  if(Array3[0]!="bomb")
  {
    if(Array2[0]=="bomb"){Array3[0]=Array3[0]+1;}
    if(Array2[1]=="bomb"){Array3[0]=Array3[0]+1;}
    if(Array3[1]=="bomb"){Array3[0]=Array3[0]+1;}
    if(Array4[0]=="bomb"){Array3[0]=Array3[0]+1;}
    if(Array4[1]=="bomb"){Array3[0]=Array3[0]+1;}
  }
  if(Array3[1]!="bomb")
  {
    if(Array2[0]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array2[1]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array2[2]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array3[0]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array3[2]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array4[0]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array4[1]=="bomb"){Array3[1]=Array3[1]+1;}
    if(Array4[2]=="bomb"){Array3[1]=Array3[1]+1;}
  }
  if(Array3[2]!="bomb")
  {
    if(Array2[1]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array2[2]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array2[3]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array3[1]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array3[3]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array4[1]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array4[2]=="bomb"){Array3[2]=Array3[2]+1;}
    if(Array4[3]=="bomb"){Array3[2]=Array3[2]+1;}
  }
  if(Array3[3]!="bomb")
  {
    if(Array2[2]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array2[3]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array2[4]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array3[2]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array3[4]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array4[2]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array4[3]=="bomb"){Array3[3]=Array3[3]+1;}
    if(Array4[4]=="bomb"){Array3[3]=Array3[3]+1;}
  }
  if(Array3[4]!="bomb")
  {
    if(Array2[3]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array2[4]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array2[5]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array3[3]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array3[5]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array4[3]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array4[4]=="bomb"){Array3[4]=Array3[4]+1;}
    if(Array4[5]=="bomb"){Array3[4]=Array3[4]+1;}
  }
  if(Array3[5]!="bomb")
  {
    if(Array2[4]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array2[5]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array2[6]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array3[4]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array3[6]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array4[4]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array4[5]=="bomb"){Array3[5]=Array3[5]+1;}
    if(Array4[6]=="bomb"){Array3[5]=Array3[5]+1;}
  }
  if(Array3[6]!="bomb")
  {
    if(Array2[5]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array2[6]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array2[7]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array3[5]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array3[7]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array4[5]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array4[6]=="bomb"){Array3[6]=Array3[6]+1;}
    if(Array4[7]=="bomb"){Array3[6]=Array3[6]+1;}
  }
  if(Array3[7]!="bomb")
  {
    if(Array2[6]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array2[7]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array2[8]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array3[6]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array3[8]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array4[6]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array4[7]=="bomb"){Array3[7]=Array3[7]+1;}
    if(Array4[8]=="bomb"){Array3[7]=Array3[7]+1;}
  }
  if(Array3[8]!="bomb")
  {
    if(Array2[7]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array2[8]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array2[9]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array3[7]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array3[9]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array4[7]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array4[8]=="bomb"){Array3[8]=Array3[8]+1;}
    if(Array4[9]=="bomb"){Array3[8]=Array3[8]+1;}
  }
  if(Array3[9]!="bomb")
  {
    if(Array2[8]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array2[9]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array2[10]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array3[8]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array3[10]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array4[8]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array4[9]=="bomb"){Array3[9]=Array3[9]+1;}
    if(Array4[10]=="bomb"){Array3[9]=Array3[9]+1;}
  }
  if(Array3[10]!="bomb")
  {
    if(Array2[9]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array2[10]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array2[11]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array3[9]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array3[11]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array4[9]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array4[10]=="bomb"){Array3[10]=Array3[10]+1;}
    if(Array4[11]=="bomb"){Array3[10]=Array3[10]+1;}
  }
  if(Array3[11]!="bomb")
  {
    if(Array2[10]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array2[11]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array2[12]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array3[10]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array3[12]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array4[10]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array4[11]=="bomb"){Array3[11]=Array3[11]+1;}
    if(Array4[12]=="bomb"){Array3[11]=Array3[11]+1;}
  }
  if(Array3[12]!="bomb")
  {
    if(Array2[11]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array2[12]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array2[13]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array3[11]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array3[13]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array4[11]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array4[12]=="bomb"){Array3[12]=Array3[12]+1;}
    if(Array4[13]=="bomb"){Array3[12]=Array3[12]+1;}
  }
  if(Array3[13]!="bomb")
  {
    if(Array2[12]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array2[13]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array2[14]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array3[12]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array3[14]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array4[12]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array4[13]=="bomb"){Array3[13]=Array3[13]+1;}
    if(Array4[14]=="bomb"){Array3[13]=Array3[13]+1;}
  }
  if(Array3[14]!="bomb")
  {
    if(Array2[13]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array2[14]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array2[15]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array3[13]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array3[15]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array4[13]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array4[14]=="bomb"){Array3[14]=Array3[14]+1;}
    if(Array4[15]=="bomb"){Array3[14]=Array3[14]+1;}
  }
  if(Array3[15]!="bomb")
  {
    if(Array2[14]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array2[15]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array2[16]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array3[14]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array3[16]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array4[14]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array4[15]=="bomb"){Array3[15]=Array3[15]+1;}
    if(Array4[16]=="bomb"){Array3[15]=Array3[15]+1;}
  }
  if(Array3[16]!="bomb")
  {
    if(Array2[15]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array2[16]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array2[17]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array3[15]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array3[17]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array4[15]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array4[16]=="bomb"){Array3[16]=Array3[16]+1;}
    if(Array4[17]=="bomb"){Array3[16]=Array3[16]+1;}
  }
  if(Array3[17]!="bomb")
  {
    if(Array2[16]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array2[17]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array2[18]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array3[16]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array3[18]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array4[16]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array4[17]=="bomb"){Array3[17]=Array3[17]+1;}
    if(Array4[18]=="bomb"){Array3[17]=Array3[17]+1;}
  }
  if(Array3[18]!="bomb")
  {
    if(Array2[17]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array2[18]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array2[19]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array3[17]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array3[19]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array4[17]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array4[18]=="bomb"){Array3[18]=Array3[18]+1;}
    if(Array4[19]=="bomb"){Array3[18]=Array3[18]+1;}
  }
  if(Array3[19]!="bomb")
  {
    if(Array2[18]=="bomb"){Array3[19]=Array3[19]+1;}
    if(Array2[19]=="bomb"){Array3[19]=Array3[19]+1;}
    if(Array3[18]=="bomb"){Array3[19]=Array3[19]+1;}
    if(Array4[18]=="bomb"){Array3[19]=Array3[19]+1;}
    if(Array4[19]=="bomb"){Array3[19]=Array3[19]+1;}
  }
  //Break
  //Break
  if(Array4[0]!="bomb")
  {
    if(Array3[0]=="bomb"){Array4[0]=Array4[0]+1;}
    if(Array3[1]=="bomb"){Array4[0]=Array4[0]+1;}
    if(Array4[1]=="bomb"){Array4[0]=Array4[0]+1;}
    if(Array5[0]=="bomb"){Array4[0]=Array4[0]+1;}
    if(Array5[1]=="bomb"){Array4[0]=Array4[0]+1;}
  }
  if(Array4[1]!="bomb")
  {
    if(Array3[0]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array3[1]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array3[2]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array4[0]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array4[2]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array5[0]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array5[1]=="bomb"){Array4[1]=Array4[1]+1;}
    if(Array5[2]=="bomb"){Array4[1]=Array4[1]+1;}
  }
  if(Array4[2]!="bomb")
  {
    if(Array3[1]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array3[2]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array3[3]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array4[1]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array4[3]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array5[1]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array5[2]=="bomb"){Array4[2]=Array4[2]+1;}
    if(Array5[3]=="bomb"){Array4[2]=Array4[2]+1;}
  }
  if(Array4[3]!="bomb")
  {
    if(Array3[2]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array3[3]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array3[4]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array4[2]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array4[4]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array5[2]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array5[3]=="bomb"){Array4[3]=Array4[3]+1;}
    if(Array5[4]=="bomb"){Array4[3]=Array4[3]+1;}
  }
  if(Array4[4]!="bomb")
  {
    if(Array3[3]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array3[4]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array3[5]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array4[3]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array4[5]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array5[3]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array5[4]=="bomb"){Array4[4]=Array4[4]+1;}
    if(Array5[5]=="bomb"){Array4[4]=Array4[4]+1;}
  }
  if(Array4[5]!="bomb")
  {
    if(Array3[4]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array3[5]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array3[6]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array4[4]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array4[6]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array5[4]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array5[5]=="bomb"){Array4[5]=Array4[5]+1;}
    if(Array5[6]=="bomb"){Array4[5]=Array4[5]+1;}
  }
  if(Array4[6]!="bomb")
  {
    if(Array3[5]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array3[6]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array3[7]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array4[5]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array4[7]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array5[5]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array5[6]=="bomb"){Array4[6]=Array4[6]+1;}
    if(Array5[7]=="bomb"){Array4[6]=Array4[6]+1;}
  }
  if(Array4[7]!="bomb")
  {
    if(Array3[6]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array3[7]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array3[8]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array4[6]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array4[8]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array5[6]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array5[7]=="bomb"){Array4[7]=Array4[7]+1;}
    if(Array5[8]=="bomb"){Array4[7]=Array4[7]+1;}
  }
  if(Array4[8]!="bomb")
  {
    if(Array3[7]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array3[8]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array3[9]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array4[7]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array4[9]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array5[7]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array5[8]=="bomb"){Array4[8]=Array4[8]+1;}
    if(Array5[9]=="bomb"){Array4[8]=Array4[8]+1;}
  }
  if(Array4[9]!="bomb")
  {
    if(Array3[8]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array3[9]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array3[10]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array4[8]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array4[10]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array5[8]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array5[9]=="bomb"){Array4[9]=Array4[9]+1;}
    if(Array5[10]=="bomb"){Array4[9]=Array4[9]+1;}
  }
  if(Array4[10]!="bomb")
  {
    if(Array3[9]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array3[10]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array3[11]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array4[9]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array4[11]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array5[9]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array5[10]=="bomb"){Array4[10]=Array4[10]+1;}
    if(Array5[11]=="bomb"){Array4[10]=Array4[10]+1;}
  }
  if(Array4[11]!="bomb")
  {
    if(Array3[10]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array3[11]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array3[12]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array4[10]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array4[12]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array5[10]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array5[11]=="bomb"){Array4[11]=Array4[11]+1;}
    if(Array5[12]=="bomb"){Array4[11]=Array4[11]+1;}
  }
  if(Array4[12]!="bomb")
  {
    if(Array3[11]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array3[12]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array3[13]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array4[11]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array4[13]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array5[11]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array5[12]=="bomb"){Array4[12]=Array4[12]+1;}
    if(Array5[13]=="bomb"){Array4[12]=Array4[12]+1;}
  }
  if(Array4[13]!="bomb")
  {
    if(Array3[12]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array3[13]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array3[14]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array4[12]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array4[14]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array5[12]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array5[13]=="bomb"){Array4[13]=Array4[13]+1;}
    if(Array5[14]=="bomb"){Array4[13]=Array4[13]+1;}
  }
  if(Array4[14]!="bomb")
  {
    if(Array3[13]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array3[14]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array3[15]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array4[13]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array4[15]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array5[13]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array5[14]=="bomb"){Array4[14]=Array4[14]+1;}
    if(Array5[15]=="bomb"){Array4[14]=Array4[14]+1;}
  }
  if(Array4[15]!="bomb")
  {
    if(Array3[14]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array3[15]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array3[16]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array4[14]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array4[16]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array5[14]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array5[15]=="bomb"){Array4[15]=Array4[15]+1;}
    if(Array5[16]=="bomb"){Array4[15]=Array4[15]+1;}
  }
  if(Array4[16]!="bomb")
  {
    if(Array3[15]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array3[16]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array3[17]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array4[15]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array4[17]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array5[15]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array5[16]=="bomb"){Array4[16]=Array4[16]+1;}
    if(Array5[17]=="bomb"){Array4[16]=Array4[16]+1;}
  }
  if(Array4[17]!="bomb")
  {
    if(Array3[16]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array3[17]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array3[18]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array4[16]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array4[18]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array5[16]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array5[17]=="bomb"){Array4[17]=Array4[17]+1;}
    if(Array5[18]=="bomb"){Array4[17]=Array4[17]+1;}
  }
  if(Array4[18]!="bomb")
  {
    if(Array3[17]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array3[18]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array3[19]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array4[17]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array4[19]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array5[17]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array5[18]=="bomb"){Array4[18]=Array4[18]+1;}
    if(Array5[19]=="bomb"){Array4[18]=Array4[18]+1;}
  }
  if(Array4[19]!="bomb")
  {
    if(Array3[18]=="bomb"){Array4[19]=Array4[19]+1;}
    if(Array3[19]=="bomb"){Array4[19]=Array4[19]+1;}
    if(Array4[18]=="bomb"){Array4[19]=Array4[19]+1;}
    if(Array5[18]=="bomb"){Array4[19]=Array4[19]+1;}
    if(Array5[19]=="bomb"){Array4[19]=Array4[19]+1;}
  }
  //Break
  //Break
  if(Array5[0]!="bomb")
  {
    if(Array4[0]=="bomb"){Array5[0]=Array5[0]+1;}
    if(Array4[1]=="bomb"){Array5[0]=Array5[0]+1;}
    if(Array5[1]=="bomb"){Array5[0]=Array5[0]+1;}
    if(Array6[0]=="bomb"){Array5[0]=Array5[0]+1;}
    if(Array6[1]=="bomb"){Array5[0]=Array5[0]+1;}
  }
  if(Array5[1]!="bomb")
  {
    if(Array4[0]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array4[1]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array4[2]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array5[0]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array5[2]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array6[0]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array6[1]=="bomb"){Array5[1]=Array5[1]+1;}
    if(Array6[2]=="bomb"){Array5[1]=Array5[1]+1;}
  }
  if(Array5[2]!="bomb")
  {
    if(Array4[1]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array4[2]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array4[3]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array5[1]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array5[3]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array6[1]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array6[2]=="bomb"){Array5[2]=Array5[2]+1;}
    if(Array6[3]=="bomb"){Array5[2]=Array5[2]+1;}
  }
  if(Array5[3]!="bomb")
  {
    if(Array4[2]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array4[3]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array4[4]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array5[2]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array5[4]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array6[2]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array6[3]=="bomb"){Array5[3]=Array5[3]+1;}
    if(Array6[4]=="bomb"){Array5[3]=Array5[3]+1;}
  }
  if(Array5[4]!="bomb")
  {
    if(Array4[3]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array4[4]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array4[5]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array5[3]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array5[5]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array6[3]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array6[4]=="bomb"){Array5[4]=Array5[4]+1;}
    if(Array6[5]=="bomb"){Array5[4]=Array5[4]+1;}
  }
  if(Array5[5]!="bomb")
  {
    if(Array4[4]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array4[5]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array4[6]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array5[4]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array5[6]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array6[4]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array6[5]=="bomb"){Array5[5]=Array5[5]+1;}
    if(Array6[6]=="bomb"){Array5[5]=Array5[5]+1;}
  }
  if(Array5[6]!="bomb")
  {
    if(Array4[5]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array4[6]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array4[7]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array5[5]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array5[7]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array6[5]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array6[6]=="bomb"){Array5[6]=Array5[6]+1;}
    if(Array6[7]=="bomb"){Array5[6]=Array5[6]+1;}
  }
  if(Array5[7]!="bomb")
  {
    if(Array4[6]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array4[7]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array4[8]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array5[6]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array5[8]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array6[6]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array6[7]=="bomb"){Array5[7]=Array5[7]+1;}
    if(Array6[8]=="bomb"){Array5[7]=Array5[7]+1;}
  }
  if(Array5[8]!="bomb")
  {
    if(Array4[7]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array4[8]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array4[9]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array5[7]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array5[9]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array6[7]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array6[8]=="bomb"){Array5[8]=Array5[8]+1;}
    if(Array6[9]=="bomb"){Array5[8]=Array5[8]+1;}
  }
  if(Array5[9]!="bomb")
  {
    if(Array4[8]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array4[9]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array4[10]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array5[8]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array5[10]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array6[8]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array6[9]=="bomb"){Array5[9]=Array5[9]+1;}
    if(Array6[10]=="bomb"){Array5[9]=Array5[9]+1;}
  }
  if(Array5[10]!="bomb")
  {
    if(Array4[9]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array4[10]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array4[11]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array5[9]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array5[11]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array6[9]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array6[10]=="bomb"){Array5[10]=Array5[10]+1;}
    if(Array6[11]=="bomb"){Array5[10]=Array5[10]+1;}
  }
  if(Array5[11]!="bomb")
  {
    if(Array4[10]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array4[11]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array4[12]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array5[10]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array5[12]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array6[10]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array6[11]=="bomb"){Array5[11]=Array5[11]+1;}
    if(Array6[12]=="bomb"){Array5[11]=Array5[11]+1;}
  }
  if(Array5[12]!="bomb")
  {
    if(Array4[11]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array4[12]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array4[13]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array5[11]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array5[13]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array6[11]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array6[12]=="bomb"){Array5[12]=Array5[12]+1;}
    if(Array6[13]=="bomb"){Array5[12]=Array5[12]+1;}
  }
  if(Array5[13]!="bomb")
  {
    if(Array4[12]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array4[13]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array4[14]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array5[12]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array5[14]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array6[12]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array6[13]=="bomb"){Array5[13]=Array5[13]+1;}
    if(Array6[14]=="bomb"){Array5[13]=Array5[13]+1;}
  }
  if(Array5[14]!="bomb")
  {
    if(Array4[13]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array4[14]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array4[15]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array5[13]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array5[15]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array6[13]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array6[14]=="bomb"){Array5[14]=Array5[14]+1;}
    if(Array6[15]=="bomb"){Array5[14]=Array5[14]+1;}
  }
  if(Array5[15]!="bomb")
  {
    if(Array4[14]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array4[15]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array4[16]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array5[14]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array5[16]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array6[14]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array6[15]=="bomb"){Array5[15]=Array5[15]+1;}
    if(Array6[16]=="bomb"){Array5[15]=Array5[15]+1;}
  }
  if(Array5[16]!="bomb")
  {
    if(Array4[15]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array4[16]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array4[17]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array5[15]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array5[17]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array6[15]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array6[16]=="bomb"){Array5[16]=Array5[16]+1;}
    if(Array6[17]=="bomb"){Array5[16]=Array5[16]+1;}
  }
  if(Array5[17]!="bomb")
  {
    if(Array4[16]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array4[17]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array4[18]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array5[16]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array5[18]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array6[16]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array6[17]=="bomb"){Array5[17]=Array5[17]+1;}
    if(Array6[18]=="bomb"){Array5[17]=Array5[17]+1;}
  }
  if(Array5[18]!="bomb")
  {
    if(Array4[17]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array4[18]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array4[19]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array5[17]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array5[19]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array6[17]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array6[18]=="bomb"){Array5[18]=Array5[18]+1;}
    if(Array6[19]=="bomb"){Array5[18]=Array5[18]+1;}
  }
  if(Array5[19]!="bomb")
  {
    if(Array4[18]=="bomb"){Array5[19]=Array5[19]+1;}
    if(Array4[19]=="bomb"){Array5[19]=Array5[19]+1;}
    if(Array5[18]=="bomb"){Array5[19]=Array5[19]+1;}
    if(Array6[18]=="bomb"){Array5[19]=Array5[19]+1;}
    if(Array6[19]=="bomb"){Array5[19]=Array5[19]+1;}
  }
  //Break
  //Break
  if(Array6[0]!="bomb")
  {
    if(Array5[0]=="bomb"){Array6[0]=Array6[0]+1;}
    if(Array5[1]=="bomb"){Array6[0]=Array6[0]+1;}
    if(Array6[1]=="bomb"){Array6[0]=Array6[0]+1;}
    if(Array7[0]=="bomb"){Array6[0]=Array6[0]+1;}
    if(Array7[1]=="bomb"){Array6[0]=Array6[0]+1;}
  }
  if(Array6[1]!="bomb")
  {
    if(Array5[0]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array5[1]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array5[2]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array6[0]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array6[2]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array7[0]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array7[1]=="bomb"){Array6[1]=Array6[1]+1;}
    if(Array7[2]=="bomb"){Array6[1]=Array6[1]+1;}
  }
  if(Array6[2]!="bomb")
  {
    if(Array5[1]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array5[2]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array5[3]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array6[1]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array6[3]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array7[1]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array7[2]=="bomb"){Array6[2]=Array6[2]+1;}
    if(Array7[3]=="bomb"){Array6[2]=Array6[2]+1;}
  }
  if(Array6[3]!="bomb")
  {
    if(Array5[2]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array5[3]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array5[4]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array6[2]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array6[4]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array7[2]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array7[3]=="bomb"){Array6[3]=Array6[3]+1;}
    if(Array7[4]=="bomb"){Array6[3]=Array6[3]+1;}
  }
  if(Array6[4]!="bomb")
  {
    if(Array5[3]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array5[4]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array5[5]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array6[3]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array6[5]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array7[3]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array7[4]=="bomb"){Array6[4]=Array6[4]+1;}
    if(Array7[5]=="bomb"){Array6[4]=Array6[4]+1;}
  }
  if(Array6[5]!="bomb")
  {
    if(Array5[4]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array5[5]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array5[6]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array6[4]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array6[6]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array7[4]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array7[5]=="bomb"){Array6[5]=Array6[5]+1;}
    if(Array7[6]=="bomb"){Array6[5]=Array6[5]+1;}
  }
  if(Array6[6]!="bomb")
  {
    if(Array5[5]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array5[6]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array5[7]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array6[5]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array6[7]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array7[5]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array7[6]=="bomb"){Array6[6]=Array6[6]+1;}
    if(Array7[7]=="bomb"){Array6[6]=Array6[6]+1;}
  }
  if(Array6[7]!="bomb")
  {
    if(Array5[6]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array5[7]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array5[8]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array6[6]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array6[8]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array7[6]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array7[7]=="bomb"){Array6[7]=Array6[7]+1;}
    if(Array7[8]=="bomb"){Array6[7]=Array6[7]+1;}
  }
  if(Array6[8]!="bomb")
  {
    if(Array5[7]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array5[8]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array5[9]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array6[7]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array6[9]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array7[7]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array7[8]=="bomb"){Array6[8]=Array6[8]+1;}
    if(Array7[9]=="bomb"){Array6[8]=Array6[8]+1;}
  }
  if(Array6[9]!="bomb")
  {
    if(Array5[8]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array5[9]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array5[10]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array6[8]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array6[10]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array7[8]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array7[9]=="bomb"){Array6[9]=Array6[9]+1;}
    if(Array7[10]=="bomb"){Array6[9]=Array6[9]+1;}
  }
  if(Array6[10]!="bomb")
  {
    if(Array5[9]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array5[10]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array5[11]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array6[9]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array6[11]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array7[9]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array7[10]=="bomb"){Array6[10]=Array6[10]+1;}
    if(Array7[11]=="bomb"){Array6[10]=Array6[10]+1;}
  }
  if(Array6[11]!="bomb")
  {
    if(Array5[10]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array5[11]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array5[12]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array6[10]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array6[12]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array7[10]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array7[11]=="bomb"){Array6[11]=Array6[11]+1;}
    if(Array7[12]=="bomb"){Array6[11]=Array6[11]+1;}
  }
  if(Array6[12]!="bomb")
  {
    if(Array5[11]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array5[12]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array5[13]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array6[11]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array6[13]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array7[11]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array7[12]=="bomb"){Array6[12]=Array6[12]+1;}
    if(Array7[13]=="bomb"){Array6[12]=Array6[12]+1;}
  }
  if(Array6[13]!="bomb")
  {
    if(Array5[12]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array5[13]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array5[14]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array6[12]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array6[14]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array7[12]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array7[13]=="bomb"){Array6[13]=Array6[13]+1;}
    if(Array7[14]=="bomb"){Array6[13]=Array6[13]+1;}
  }
  if(Array6[14]!="bomb")
  {
    if(Array5[13]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array5[14]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array5[15]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array6[13]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array6[15]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array7[13]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array7[14]=="bomb"){Array6[14]=Array6[14]+1;}
    if(Array7[15]=="bomb"){Array6[14]=Array6[14]+1;}
  }
  if(Array6[15]!="bomb")
  {
    if(Array5[14]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array5[15]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array5[16]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array6[14]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array6[16]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array7[14]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array7[15]=="bomb"){Array6[15]=Array6[15]+1;}
    if(Array7[16]=="bomb"){Array6[15]=Array6[15]+1;}
  }
  if(Array6[16]!="bomb")
  {
    if(Array5[15]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array5[16]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array5[17]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array6[15]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array6[17]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array7[15]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array7[16]=="bomb"){Array6[16]=Array6[16]+1;}
    if(Array7[17]=="bomb"){Array6[16]=Array6[16]+1;}
  }
  if(Array6[17]!="bomb")
  {
    if(Array5[16]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array5[17]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array5[18]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array6[16]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array6[18]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array7[16]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array7[17]=="bomb"){Array6[17]=Array6[17]+1;}
    if(Array7[18]=="bomb"){Array6[17]=Array6[17]+1;}
  }
  if(Array6[18]!="bomb")
  {
    if(Array5[17]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array5[18]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array5[19]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array6[17]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array6[19]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array7[17]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array7[18]=="bomb"){Array6[18]=Array6[18]+1;}
    if(Array7[19]=="bomb"){Array6[18]=Array6[18]+1;}
  }
  if(Array6[19]!="bomb")
  {
    if(Array5[18]=="bomb"){Array6[19]=Array6[19]+1;}
    if(Array5[19]=="bomb"){Array6[19]=Array6[19]+1;}
    if(Array6[18]=="bomb"){Array6[19]=Array6[19]+1;}
    if(Array7[18]=="bomb"){Array6[19]=Array6[19]+1;}
    if(Array7[19]=="bomb"){Array6[19]=Array6[19]+1;}
  }
  //Break
  //Break
  if(Array7[0]!="bomb")
  {
    if(Array6[0]=="bomb"){Array7[0]=Array7[0]+1;}
    if(Array6[1]=="bomb"){Array7[0]=Array7[0]+1;}
    if(Array7[1]=="bomb"){Array7[0]=Array7[0]+1;}
    if(Array8[0]=="bomb"){Array7[0]=Array7[0]+1;}
    if(Array8[1]=="bomb"){Array7[0]=Array7[0]+1;}
  }
  if(Array7[1]!="bomb")
  {
    if(Array6[0]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array6[1]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array6[2]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array7[0]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array7[2]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array8[0]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array8[1]=="bomb"){Array7[1]=Array7[1]+1;}
    if(Array8[2]=="bomb"){Array7[1]=Array7[1]+1;}
  }
  if(Array7[2]!="bomb")
  {
    if(Array6[1]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array6[2]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array6[3]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array7[1]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array7[3]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array8[1]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array8[2]=="bomb"){Array7[2]=Array7[2]+1;}
    if(Array8[3]=="bomb"){Array7[2]=Array7[2]+1;}
  }
  if(Array7[3]!="bomb")
  {
    if(Array6[2]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array6[3]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array6[4]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array7[2]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array7[4]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array8[2]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array8[3]=="bomb"){Array7[3]=Array7[3]+1;}
    if(Array8[4]=="bomb"){Array7[3]=Array7[3]+1;}
  }
  if(Array7[4]!="bomb")
  {
    if(Array6[3]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array6[4]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array6[5]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array7[3]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array7[5]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array8[3]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array8[4]=="bomb"){Array7[4]=Array7[4]+1;}
    if(Array8[5]=="bomb"){Array7[4]=Array7[4]+1;}
  }
  if(Array7[5]!="bomb")
  {
    if(Array6[4]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array6[5]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array6[6]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array7[4]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array7[6]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array8[4]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array8[5]=="bomb"){Array7[5]=Array7[5]+1;}
    if(Array8[6]=="bomb"){Array7[5]=Array7[5]+1;}
  }
  if(Array7[6]!="bomb")
  {
    if(Array6[5]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array6[6]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array6[7]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array7[5]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array7[7]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array8[5]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array8[6]=="bomb"){Array7[6]=Array7[6]+1;}
    if(Array8[7]=="bomb"){Array7[6]=Array7[6]+1;}
  }
  if(Array7[7]!="bomb")
  {
    if(Array6[6]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array6[7]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array6[8]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array7[6]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array7[8]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array8[6]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array8[7]=="bomb"){Array7[7]=Array7[7]+1;}
    if(Array8[8]=="bomb"){Array7[7]=Array7[7]+1;}
  }
  if(Array7[8]!="bomb")
  {
    if(Array6[7]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array6[8]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array6[9]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array7[7]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array7[9]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array8[7]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array8[8]=="bomb"){Array7[8]=Array7[8]+1;}
    if(Array8[9]=="bomb"){Array7[8]=Array7[8]+1;}
  }
  if(Array7[9]!="bomb")
  {
    if(Array6[8]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array6[9]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array6[10]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array7[8]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array7[10]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array8[8]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array8[9]=="bomb"){Array7[9]=Array7[9]+1;}
    if(Array8[10]=="bomb"){Array7[9]=Array7[9]+1;}
  }
  if(Array7[10]!="bomb")
  {
    if(Array6[9]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array6[10]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array6[11]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array7[9]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array7[11]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array8[9]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array8[10]=="bomb"){Array7[10]=Array7[10]+1;}
    if(Array8[11]=="bomb"){Array7[10]=Array7[10]+1;}
  }
  if(Array7[11]!="bomb")
  {
    if(Array6[10]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array6[11]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array6[12]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array7[10]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array7[12]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array8[10]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array8[11]=="bomb"){Array7[11]=Array7[11]+1;}
    if(Array8[12]=="bomb"){Array7[11]=Array7[11]+1;}
  }
  if(Array7[12]!="bomb")
  {
    if(Array6[11]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array6[12]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array6[13]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array7[11]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array7[13]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array8[11]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array8[12]=="bomb"){Array7[12]=Array7[12]+1;}
    if(Array8[13]=="bomb"){Array7[12]=Array7[12]+1;}
  }
  if(Array7[13]!="bomb")
  {
    if(Array6[12]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array6[13]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array6[14]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array7[12]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array7[14]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array8[12]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array8[13]=="bomb"){Array7[13]=Array7[13]+1;}
    if(Array8[14]=="bomb"){Array7[13]=Array7[13]+1;}
  }
  if(Array7[14]!="bomb")
  {
    if(Array6[13]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array6[14]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array6[15]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array7[13]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array7[15]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array8[13]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array8[14]=="bomb"){Array7[14]=Array7[14]+1;}
    if(Array8[15]=="bomb"){Array7[14]=Array7[14]+1;}
  }
  if(Array7[15]!="bomb")
  {
    if(Array6[14]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array6[15]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array6[16]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array7[14]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array7[16]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array8[14]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array8[15]=="bomb"){Array7[15]=Array7[15]+1;}
    if(Array8[16]=="bomb"){Array7[15]=Array7[15]+1;}
  }
  if(Array7[16]!="bomb")
  {
    if(Array6[15]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array6[16]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array6[17]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array7[15]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array7[17]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array8[15]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array8[16]=="bomb"){Array7[16]=Array7[16]+1;}
    if(Array8[17]=="bomb"){Array7[16]=Array7[16]+1;}
  }
  if(Array7[17]!="bomb")
  {
    if(Array6[16]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array6[17]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array6[18]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array7[16]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array7[18]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array8[16]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array8[17]=="bomb"){Array7[17]=Array7[17]+1;}
    if(Array8[18]=="bomb"){Array7[17]=Array7[17]+1;}
  }
  if(Array7[18]!="bomb")
  {
    if(Array6[17]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array6[18]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array6[19]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array7[17]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array7[19]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array8[17]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array8[18]=="bomb"){Array7[18]=Array7[18]+1;}
    if(Array8[19]=="bomb"){Array7[18]=Array7[18]+1;}
  }
  if(Array7[19]!="bomb")
  {
    if(Array6[18]=="bomb"){Array7[19]=Array7[19]+1;}
    if(Array6[19]=="bomb"){Array7[19]=Array7[19]+1;}
    if(Array7[18]=="bomb"){Array7[19]=Array7[19]+1;}
    if(Array8[18]=="bomb"){Array7[19]=Array7[19]+1;}
    if(Array8[19]=="bomb"){Array7[19]=Array7[19]+1;}
  }
  //Break
  //Break
  if(Array8[0]!="bomb")
  {
    if(Array7[0]=="bomb"){Array8[0]=Array8[0]+1;}
    if(Array7[1]=="bomb"){Array8[0]=Array8[0]+1;}
    if(Array8[1]=="bomb"){Array8[0]=Array8[0]+1;}
    if(Array9[0]=="bomb"){Array8[0]=Array8[0]+1;}
    if(Array9[1]=="bomb"){Array8[0]=Array8[0]+1;}
  }
  if(Array8[1]!="bomb")
  {
    if(Array7[0]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array7[1]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array7[2]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array8[0]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array8[2]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array9[0]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array9[1]=="bomb"){Array8[1]=Array8[1]+1;}
    if(Array9[2]=="bomb"){Array8[1]=Array8[1]+1;}
  }
  if(Array8[2]!="bomb")
  {
    if(Array7[1]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array7[2]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array7[3]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array8[1]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array8[3]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array9[1]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array9[2]=="bomb"){Array8[2]=Array8[2]+1;}
    if(Array9[3]=="bomb"){Array8[2]=Array8[2]+1;}
  }
  if(Array8[3]!="bomb")
  {
    if(Array7[2]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array7[3]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array7[4]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array8[2]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array8[4]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array9[2]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array9[3]=="bomb"){Array8[3]=Array8[3]+1;}
    if(Array9[4]=="bomb"){Array8[3]=Array8[3]+1;}
  }
  if(Array8[4]!="bomb")
  {
    if(Array7[3]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array7[4]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array7[5]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array8[3]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array8[5]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array9[3]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array9[4]=="bomb"){Array8[4]=Array8[4]+1;}
    if(Array9[5]=="bomb"){Array8[4]=Array8[4]+1;}
  }
  if(Array8[5]!="bomb")
  {
    if(Array7[4]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array7[5]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array7[6]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array8[4]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array8[6]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array9[4]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array9[5]=="bomb"){Array8[5]=Array8[5]+1;}
    if(Array9[6]=="bomb"){Array8[5]=Array8[5]+1;}
  }
  if(Array8[6]!="bomb")
  {
    if(Array7[5]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array7[6]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array7[7]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array8[5]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array8[7]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array9[5]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array9[6]=="bomb"){Array8[6]=Array8[6]+1;}
    if(Array9[7]=="bomb"){Array8[6]=Array8[6]+1;}
  }
  if(Array8[7]!="bomb")
  {
    if(Array7[6]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array7[7]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array7[8]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array8[6]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array8[8]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array9[6]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array9[7]=="bomb"){Array8[7]=Array8[7]+1;}
    if(Array9[8]=="bomb"){Array8[7]=Array8[7]+1;}
  }
  if(Array8[8]!="bomb")
  {
    if(Array7[7]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array7[8]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array7[9]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array8[7]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array8[9]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array9[7]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array9[8]=="bomb"){Array8[8]=Array8[8]+1;}
    if(Array9[9]=="bomb"){Array8[8]=Array8[8]+1;}
  }
  if(Array8[9]!="bomb")
  {
    if(Array7[8]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array7[9]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array7[10]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array8[8]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array8[10]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array9[8]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array9[9]=="bomb"){Array8[9]=Array8[9]+1;}
    if(Array9[10]=="bomb"){Array8[9]=Array8[9]+1;}
  }
  if(Array8[10]!="bomb")
  {
    if(Array7[9]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array7[10]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array7[11]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array8[9]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array8[11]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array9[9]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array9[10]=="bomb"){Array8[10]=Array8[10]+1;}
    if(Array9[11]=="bomb"){Array8[10]=Array8[10]+1;}
  }
  if(Array8[11]!="bomb")
  {
    if(Array7[10]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array7[11]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array7[12]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array8[10]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array8[12]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array9[10]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array9[11]=="bomb"){Array8[11]=Array8[11]+1;}
    if(Array9[12]=="bomb"){Array8[11]=Array8[11]+1;}
  }
  if(Array8[12]!="bomb")
  {
    if(Array7[11]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array7[12]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array7[13]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array8[11]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array8[13]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array9[11]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array9[12]=="bomb"){Array8[12]=Array8[12]+1;}
    if(Array9[13]=="bomb"){Array8[12]=Array8[12]+1;}
  }
  if(Array8[13]!="bomb")
  {
    if(Array7[12]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array7[13]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array7[14]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array8[12]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array8[14]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array9[12]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array9[13]=="bomb"){Array8[13]=Array8[13]+1;}
    if(Array9[14]=="bomb"){Array8[13]=Array8[13]+1;}
  }
  if(Array8[14]!="bomb")
  {
    if(Array7[13]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array7[14]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array7[15]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array8[13]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array8[15]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array9[13]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array9[14]=="bomb"){Array8[14]=Array8[14]+1;}
    if(Array9[15]=="bomb"){Array8[14]=Array8[14]+1;}
  }
  if(Array8[15]!="bomb")
  {
    if(Array7[14]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array7[15]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array7[16]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array8[14]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array8[16]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array9[14]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array9[15]=="bomb"){Array8[15]=Array8[15]+1;}
    if(Array9[16]=="bomb"){Array8[15]=Array8[15]+1;}
  }
  if(Array8[16]!="bomb")
  {
    if(Array7[15]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array7[16]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array7[17]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array8[15]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array8[17]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array9[15]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array9[16]=="bomb"){Array8[16]=Array8[16]+1;}
    if(Array9[17]=="bomb"){Array8[16]=Array8[16]+1;}
  }
  if(Array8[17]!="bomb")
  {
    if(Array7[16]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array7[17]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array7[18]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array8[16]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array8[18]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array9[16]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array9[17]=="bomb"){Array8[17]=Array8[17]+1;}
    if(Array9[18]=="bomb"){Array8[17]=Array8[17]+1;}
  }
  if(Array8[18]!="bomb")
  {
    if(Array7[17]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array7[18]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array7[19]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array8[17]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array8[19]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array9[17]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array9[18]=="bomb"){Array8[18]=Array8[18]+1;}
    if(Array9[19]=="bomb"){Array8[18]=Array8[18]+1;}
  }
  if(Array8[19]!="bomb")
  {
    if(Array7[18]=="bomb"){Array8[19]=Array8[19]+1;}
    if(Array7[19]=="bomb"){Array8[19]=Array8[19]+1;}
    if(Array8[18]=="bomb"){Array8[19]=Array8[19]+1;}
    if(Array9[18]=="bomb"){Array8[19]=Array8[19]+1;}
    if(Array9[19]=="bomb"){Array8[19]=Array8[19]+1;}
  }
  //Break
  //Break
  if(Array9[0]!="bomb")
  {
    if(Array8[0]=="bomb"){Array9[0]=Array9[0]+1;}
    if(Array8[1]=="bomb"){Array9[0]=Array9[0]+1;}
    if(Array9[1]=="bomb"){Array9[0]=Array9[0]+1;}
    if(Array10[0]=="bomb"){Array9[0]=Array9[0]+1;}
    if(Array10[1]=="bomb"){Array9[0]=Array9[0]+1;}
  }
  if(Array9[1]!="bomb")
  {
    if(Array8[0]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array8[1]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array8[2]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array9[0]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array9[2]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array10[0]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array10[1]=="bomb"){Array9[1]=Array9[1]+1;}
    if(Array10[2]=="bomb"){Array9[1]=Array9[1]+1;}
  }
  if(Array9[2]!="bomb")
  {
    if(Array8[1]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array8[2]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array8[3]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array9[1]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array9[3]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array10[1]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array10[2]=="bomb"){Array9[2]=Array9[2]+1;}
    if(Array10[3]=="bomb"){Array9[2]=Array9[2]+1;}
  }
  if(Array9[3]!="bomb")
  {
    if(Array8[2]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array8[3]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array8[4]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array9[2]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array9[4]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array10[2]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array10[3]=="bomb"){Array9[3]=Array9[3]+1;}
    if(Array10[4]=="bomb"){Array9[3]=Array9[3]+1;}
  }
  if(Array9[4]!="bomb")
  {
    if(Array8[3]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array8[4]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array8[5]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array9[3]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array9[5]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array10[3]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array10[4]=="bomb"){Array9[4]=Array9[4]+1;}
    if(Array10[5]=="bomb"){Array9[4]=Array9[4]+1;}
  }
  if(Array9[5]!="bomb")
  {
    if(Array8[4]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array8[5]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array8[6]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array9[4]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array9[6]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array10[4]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array10[5]=="bomb"){Array9[5]=Array9[5]+1;}
    if(Array10[6]=="bomb"){Array9[5]=Array9[5]+1;}
  }
  if(Array9[6]!="bomb")
  {
    if(Array8[5]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array8[6]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array8[7]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array9[5]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array9[7]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array10[5]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array10[6]=="bomb"){Array9[6]=Array9[6]+1;}
    if(Array10[7]=="bomb"){Array9[6]=Array9[6]+1;}
  }
  if(Array9[7]!="bomb")
  {
    if(Array8[6]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array8[7]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array8[8]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array9[6]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array9[8]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array10[6]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array10[7]=="bomb"){Array9[7]=Array9[7]+1;}
    if(Array10[8]=="bomb"){Array9[7]=Array9[7]+1;}
  }
  if(Array9[8]!="bomb")
  {
    if(Array8[7]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array8[8]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array8[9]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array9[7]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array9[9]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array10[7]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array10[8]=="bomb"){Array9[8]=Array9[8]+1;}
    if(Array10[9]=="bomb"){Array9[8]=Array9[8]+1;}
  }
  if(Array9[9]!="bomb")
  {
    if(Array8[8]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array8[9]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array8[10]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array9[8]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array9[10]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array10[8]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array10[9]=="bomb"){Array9[9]=Array9[9]+1;}
    if(Array10[10]=="bomb"){Array9[9]=Array9[9]+1;}
  }
  if(Array9[10]!="bomb")
  {
    if(Array8[9]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array8[10]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array8[11]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array9[9]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array9[11]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array10[9]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array10[10]=="bomb"){Array9[10]=Array9[10]+1;}
    if(Array10[11]=="bomb"){Array9[10]=Array9[10]+1;}
  }
  if(Array9[11]!="bomb")
  {
    if(Array8[10]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array8[11]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array8[12]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array9[10]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array9[12]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array10[10]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array10[11]=="bomb"){Array9[11]=Array9[11]+1;}
    if(Array10[12]=="bomb"){Array9[11]=Array9[11]+1;}
  }
  if(Array9[12]!="bomb")
  {
    if(Array8[11]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array8[12]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array8[13]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array9[11]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array9[13]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array10[11]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array10[12]=="bomb"){Array9[12]=Array9[12]+1;}
    if(Array10[13]=="bomb"){Array9[12]=Array9[12]+1;}
  }
  if(Array9[13]!="bomb")
  {
    if(Array8[12]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array8[13]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array8[14]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array9[12]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array9[14]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array10[12]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array10[13]=="bomb"){Array9[13]=Array9[13]+1;}
    if(Array10[14]=="bomb"){Array9[13]=Array9[13]+1;}
  }
  if(Array9[14]!="bomb")
  {
    if(Array8[13]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array8[14]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array8[15]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array9[13]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array9[15]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array10[13]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array10[14]=="bomb"){Array9[14]=Array9[14]+1;}
    if(Array10[15]=="bomb"){Array9[14]=Array9[14]+1;}
  }
  if(Array9[15]!="bomb")
  {
    if(Array8[14]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array8[15]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array8[16]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array9[14]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array9[16]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array10[14]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array10[15]=="bomb"){Array9[15]=Array9[15]+1;}
    if(Array10[16]=="bomb"){Array9[15]=Array9[15]+1;}
  }
  if(Array9[16]!="bomb")
  {
    if(Array8[15]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array8[16]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array8[17]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array9[15]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array9[17]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array10[15]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array10[16]=="bomb"){Array9[16]=Array9[16]+1;}
    if(Array10[17]=="bomb"){Array9[16]=Array9[16]+1;}
  }
  if(Array9[17]!="bomb")
  {
    if(Array8[16]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array8[17]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array8[18]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array9[16]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array9[18]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array10[16]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array10[17]=="bomb"){Array9[17]=Array9[17]+1;}
    if(Array10[18]=="bomb"){Array9[17]=Array9[17]+1;}
  }
  if(Array9[18]!="bomb")
  {
    if(Array8[17]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array8[18]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array8[19]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array9[17]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array9[19]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array10[17]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array10[18]=="bomb"){Array9[18]=Array9[18]+1;}
    if(Array10[19]=="bomb"){Array9[18]=Array9[18]+1;}
  }
  if(Array9[19]!="bomb")
  {
    if(Array8[18]=="bomb"){Array9[19]=Array9[19]+1;}
    if(Array8[19]=="bomb"){Array9[19]=Array9[19]+1;}
    if(Array9[18]=="bomb"){Array9[19]=Array9[19]+1;}
    if(Array10[18]=="bomb"){Array9[19]=Array9[19]+1;}
    if(Array10[19]=="bomb"){Array9[19]=Array9[19]+1;}
  }
  //Break
  //Break
  if(Array10[0]!="bomb")
  {
    if(Array9[0]=="bomb"){Array10[0]=Array10[0]+1;}
    if(Array9[1]=="bomb"){Array10[0]=Array10[0]+1;}
    if(Array10[1]=="bomb"){Array10[0]=Array10[0]+1;}
  }
  if(Array10[1]!="bomb")
  {
    if(Array9[0]=="bomb"){Array10[1]=Array10[1]+1;}
    if(Array9[1]=="bomb"){Array10[1]=Array10[1]+1;}
    if(Array9[2]=="bomb"){Array10[1]=Array10[1]+1;}
    if(Array10[0]=="bomb"){Array10[1]=Array10[1]+1;}
    if(Array10[2]=="bomb"){Array10[1]=Array10[1]+1;}
  }
  if(Array10[2]!="bomb")
  {
    if(Array9[1]=="bomb"){Array10[2]=Array10[2]+1;}
    if(Array9[2]=="bomb"){Array10[2]=Array10[2]+1;}
    if(Array9[3]=="bomb"){Array10[2]=Array10[2]+1;}
    if(Array10[1]=="bomb"){Array10[2]=Array10[2]+1;}
    if(Array10[3]=="bomb"){Array10[2]=Array10[2]+1;}
  }
  if(Array10[3]!="bomb")
  {
    if(Array9[2]=="bomb"){Array10[3]=Array10[3]+1;}
    if(Array9[3]=="bomb"){Array10[3]=Array10[3]+1;}
    if(Array9[4]=="bomb"){Array10[3]=Array10[3]+1;}
    if(Array10[2]=="bomb"){Array10[3]=Array10[3]+1;}
    if(Array10[4]=="bomb"){Array10[3]=Array10[3]+1;}
  }
  if(Array10[4]!="bomb")
  {
    if(Array9[3]=="bomb"){Array10[4]=Array10[4]+1;}
    if(Array9[4]=="bomb"){Array10[4]=Array10[4]+1;}
    if(Array9[5]=="bomb"){Array10[4]=Array10[4]+1;}
    if(Array10[3]=="bomb"){Array10[4]=Array10[4]+1;}
    if(Array10[5]=="bomb"){Array10[4]=Array10[4]+1;}
  }
  if(Array10[5]!="bomb")
  {
    if(Array9[4]=="bomb"){Array10[5]=Array10[5]+1;}
    if(Array9[5]=="bomb"){Array10[5]=Array10[5]+1;}
    if(Array9[6]=="bomb"){Array10[5]=Array10[5]+1;}
    if(Array10[4]=="bomb"){Array10[5]=Array10[5]+1;}
    if(Array10[6]=="bomb"){Array10[5]=Array10[5]+1;}
  }
  if(Array10[6]!="bomb")
  {
    if(Array9[5]=="bomb"){Array10[6]=Array10[6]+1;}
    if(Array9[6]=="bomb"){Array10[6]=Array10[6]+1;}
    if(Array9[7]=="bomb"){Array10[6]=Array10[6]+1;}
    if(Array10[5]=="bomb"){Array10[6]=Array10[6]+1;}
    if(Array10[7]=="bomb"){Array10[6]=Array10[6]+1;}
  }
  if(Array10[7]!="bomb")
  {
    if(Array9[6]=="bomb"){Array10[7]=Array10[7]+1;}
    if(Array9[7]=="bomb"){Array10[7]=Array10[7]+1;}
    if(Array9[8]=="bomb"){Array10[7]=Array10[7]+1;}
    if(Array10[6]=="bomb"){Array10[7]=Array10[7]+1;}
    if(Array10[8]=="bomb"){Array10[7]=Array10[7]+1;}
  }
  if(Array10[8]!="bomb")
  {
    if(Array9[7]=="bomb"){Array10[8]=Array10[8]+1;}
    if(Array9[8]=="bomb"){Array10[8]=Array10[8]+1;}
    if(Array9[9]=="bomb"){Array10[8]=Array10[8]+1;}
    if(Array10[7]=="bomb"){Array10[8]=Array10[8]+1;}
    if(Array10[9]=="bomb"){Array10[8]=Array10[8]+1;}
  }
  if(Array10[9]!="bomb")
  {
    if(Array9[8]=="bomb"){Array10[9]=Array10[9]+1;}
    if(Array9[9]=="bomb"){Array10[9]=Array10[9]+1;}
    if(Array9[10]=="bomb"){Array10[9]=Array10[9]+1;}
    if(Array10[8]=="bomb"){Array10[9]=Array10[9]+1;}
    if(Array10[10]=="bomb"){Array10[9]=Array10[9]+1;}
  }
  if(Array10[10]!="bomb")
  {
    if(Array9[9]=="bomb"){Array10[10]=Array10[10]+1;}
    if(Array9[10]=="bomb"){Array10[10]=Array10[10]+1;}
    if(Array9[11]=="bomb"){Array10[10]=Array10[10]+1;}
    if(Array10[9]=="bomb"){Array10[10]=Array10[10]+1;}
    if(Array10[11]=="bomb"){Array10[10]=Array10[10]+1;}
  }
  if(Array10[11]!="bomb")
  {
    if(Array9[10]=="bomb"){Array10[11]=Array10[11]+1;}
    if(Array9[11]=="bomb"){Array10[11]=Array10[11]+1;}
    if(Array9[12]=="bomb"){Array10[11]=Array10[11]+1;}
    if(Array10[10]=="bomb"){Array10[11]=Array10[11]+1;}
    if(Array10[12]=="bomb"){Array10[11]=Array10[11]+1;}
  }
  if(Array10[12]!="bomb")
  {
    if(Array9[11]=="bomb"){Array10[12]=Array10[12]+1;}
    if(Array9[12]=="bomb"){Array10[12]=Array10[12]+1;}
    if(Array9[13]=="bomb"){Array10[12]=Array10[12]+1;}
    if(Array10[11]=="bomb"){Array10[12]=Array10[12]+1;}
    if(Array10[13]=="bomb"){Array10[12]=Array10[12]+1;}
  }
  if(Array10[13]!="bomb")
  {
    if(Array9[12]=="bomb"){Array10[13]=Array10[13]+1;}
    if(Array9[13]=="bomb"){Array10[13]=Array10[13]+1;}
    if(Array9[14]=="bomb"){Array10[13]=Array10[13]+1;}
    if(Array10[12]=="bomb"){Array10[13]=Array10[13]+1;}
    if(Array10[14]=="bomb"){Array10[13]=Array10[13]+1;}
  }
  if(Array10[14]!="bomb")
  {
    if(Array9[13]=="bomb"){Array10[14]=Array10[14]+1;}
    if(Array9[14]=="bomb"){Array10[14]=Array10[14]+1;}
    if(Array9[15]=="bomb"){Array10[14]=Array10[14]+1;}
    if(Array10[13]=="bomb"){Array10[14]=Array10[14]+1;}
    if(Array10[15]=="bomb"){Array10[14]=Array10[14]+1;}
  }
  if(Array10[15]!="bomb")
  {
    if(Array9[14]=="bomb"){Array10[15]=Array10[15]+1;}
    if(Array9[15]=="bomb"){Array10[15]=Array10[15]+1;}
    if(Array9[16]=="bomb"){Array10[15]=Array10[15]+1;}
    if(Array10[14]=="bomb"){Array10[15]=Array10[15]+1;}
    if(Array10[16]=="bomb"){Array10[15]=Array10[15]+1;}
  }
  if(Array10[16]!="bomb")
  {
    if(Array9[15]=="bomb"){Array10[16]=Array10[16]+1;}
    if(Array9[16]=="bomb"){Array10[16]=Array10[16]+1;}
    if(Array9[17]=="bomb"){Array10[16]=Array10[16]+1;}
    if(Array10[15]=="bomb"){Array10[16]=Array10[16]+1;}
    if(Array10[17]=="bomb"){Array10[16]=Array10[16]+1;}
  }
  if(Array10[17]!="bomb")
  {
    if(Array9[16]=="bomb"){Array10[17]=Array10[17]+1;}
    if(Array9[17]=="bomb"){Array10[17]=Array10[17]+1;}
    if(Array9[18]=="bomb"){Array10[17]=Array10[17]+1;}
    if(Array10[16]=="bomb"){Array10[17]=Array10[17]+1;}
    if(Array10[18]=="bomb"){Array10[17]=Array10[17]+1;}
  }
  if(Array10[18]!="bomb")
  {
    if(Array9[17]=="bomb"){Array10[18]=Array10[18]+1;}
    if(Array9[18]=="bomb"){Array10[18]=Array10[18]+1;}
    if(Array9[19]=="bomb"){Array10[18]=Array10[18]+1;}
    if(Array10[17]=="bomb"){Array10[18]=Array10[18]+1;}
    if(Array10[19]=="bomb"){Array10[18]=Array10[18]+1;}
  }
  if(Array10[19]!="bomb")
  {
    if(Array9[18]=="bomb"){Array10[19]=Array10[19]+1;}
    if(Array9[19]=="bomb"){Array10[19]=Array10[19]+1;}
    if(Array10[18]=="bomb"){Array10[19]=Array10[19]+1;}
  }
}

function Alerting1()
{
  document.getElementById('cellE1').value = Array1[0];
  if(Array1[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE1').style.backgroundColor = "green";
    document.getElementById('cellE1').innerHTML = Array1[0];
    ScoreTime();
    document.getElementById('cellE1').disabled = true;

  }
}
function Alerting2()
{
  document.getElementById('cellE2').value = Array1[1];
  if(Array1[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE2').style.backgroundColor = "green";
    document.getElementById('cellE2').innerHTML = Array1[1];
    ScoreTime();
    document.getElementById('cellE2').disabled = true;
  }
}
function Alerting3()
{
  document.getElementById('cellE3').value = Array1[2];
  if(Array1[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE3').style.backgroundColor = "green";
    document.getElementById('cellE3').innerHTML = Array1[2];
    ScoreTime();
    document.getElementById('cellE3').disabled = true;
  }
}
function Alerting4()
{
  document.getElementById('cellE4').value = Array1[3];
  if(Array1[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE4').style.backgroundColor = "green";
    document.getElementById('cellE4').innerHTML = Array1[3];
    ScoreTime();
    document.getElementById('cellE4').disabled = true;
  }
}
function Alerting5()
{
  document.getElementById('cellE5').value = Array1[4];
  if(Array1[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE5').style.backgroundColor = "green";
    document.getElementById('cellE5').innerHTML = Array1[4];
    ScoreTime();
    document.getElementById('cellE5').disabled = true;
  }
}
function Alerting6()
{
  document.getElementById('cellE6').value = Array1[5];
  if(Array1[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE6').style.backgroundColor = "green";
    document.getElementById('cellE6').innerHTML = Array1[5];
    ScoreTime();
    document.getElementById('cellE6').disabled = true;
  }
}
function Alerting7()
{
  document.getElementById('cellE7').value = Array1[6];
  if(Array1[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE7').style.backgroundColor = "green";
    document.getElementById('cellE7').innerHTML = Array1[6];
    ScoreTime();
    document.getElementById('cellE7').disabled = true;
  }
}
function Alerting8()
{
  document.getElementById('cellE8').value = Array1[7];
  if(Array1[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE8').style.backgroundColor = "green";
    document.getElementById('cellE8').innerHTML = Array1[7];
    ScoreTime();
    document.getElementById('cellE8').disabled = true;
  }
}
function Alerting9()
{
  document.getElementById('cellE9').value = Array1[8];
  if(Array1[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE9').style.backgroundColor = "green";
    document.getElementById('cellE9').innerHTML = Array1[8];
    ScoreTime();
    document.getElementById('cellE9').disabled = true;
  }
}
function Alerting10()
{
  document.getElementById('cellE10').value = Array1[9];
  if(Array1[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE10').style.backgroundColor = "green";
    document.getElementById('cellE10').innerHTML = Array1[9];
    ScoreTime();
    document.getElementById('cellE10').disabled = true;
  }
}
function Alerting11()
{
  document.getElementById('cellE11').value = Array1[10];
  if(Array1[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE11').style.backgroundColor = "green";
    document.getElementById('cellE11').innerHTML = Array1[10];
    ScoreTime();
    document.getElementById('cellE11').disabled = true;
  }
}
function Alerting12()
{
  document.getElementById('cellE12').value = Array1[11];
  if(Array1[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE12').style.backgroundColor = "green";
    document.getElementById('cellE12').innerHTML = Array1[11];
    ScoreTime();
    document.getElementById('cellE12').disabled = true;
  }
}
function Alerting13()
{
  document.getElementById('cellE13').value = Array1[12];
  if(Array1[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE13').style.backgroundColor = "green";
    document.getElementById('cellE13').innerHTML = Array1[12];
    ScoreTime();
    document.getElementById('cellE13').disabled = true;
  }
}
function Alerting14()
{
  document.getElementById('cellE14').value = Array1[13];
  if(Array1[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE14').style.backgroundColor = "green";
    document.getElementById('cellE14').innerHTML = Array1[13];
    ScoreTime();
    document.getElementById('cellE14').disabled = true;
  }
}
function Alerting15()
{
  document.getElementById('cellE15').value = Array1[14];
  if(Array1[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE15').style.backgroundColor = "green";
    document.getElementById('cellE15').innerHTML = Array1[14];
    ScoreTime();
    document.getElementById('cellE15').disabled = true;
  }
}
function Alerting16()
{
  document.getElementById('cellE16').value = Array1[15];
  if(Array1[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE16').style.backgroundColor = "green";
    document.getElementById('cellE16').innerHTML = Array1[15];
    ScoreTime();
    document.getElementById('cellE16').disabled = true;
  }
}
function Alerting17()
{
  document.getElementById('cellE17').value = Array1[16];
  if(Array1[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE17').style.backgroundColor = "green";
    document.getElementById('cellE17').innerHTML = Array1[16];
    ScoreTime();
    document.getElementById('cellE17').disabled = true;
  }
}
function Alerting18()
{
  document.getElementById('cellE18').value = Array1[17];
  if(Array1[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE18').style.backgroundColor = "green";
    document.getElementById('cellE18').innerHTML = Array1[17];
    ScoreTime();
    document.getElementById('cellE18').disabled = true;
  }
}
function Alerting19()
{
  document.getElementById('cellE19').value = Array1[18];
  if(Array1[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE19').style.backgroundColor = "green";
    document.getElementById('cellE19').innerHTML = Array1[18];
    ScoreTime();
    document.getElementById('cellE19').disabled = true;
  }
}
function Alerting20()
{
  document.getElementById('cellE20').value = Array1[19];
  if(Array1[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE20').style.backgroundColor = "green";
    document.getElementById('cellE20').innerHTML = Array1[19];
    ScoreTime();
    document.getElementById('cellE20').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting21()
{
  document.getElementById('cellE21').value = Array2[0];
  if(Array2[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE21').style.backgroundColor = "green";
    document.getElementById('cellE21').innerHTML = Array2[0];
    ScoreTime();
    document.getElementById('cellE21').disabled = true;
  }
}
function Alerting22()
{
  document.getElementById('cellE22').value = Array2[1];
  if(Array2[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE22').style.backgroundColor = "green";
    document.getElementById('cellE22').innerHTML = Array2[1];
    ScoreTime();
    document.getElementById('cellE22').disabled = true;
  }
}
function Alerting23()
{
  document.getElementById('cellE23').value = Array2[2];
  if(Array2[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE23').style.backgroundColor = "green";
    document.getElementById('cellE23').innerHTML = Array2[2];
    ScoreTime();
    document.getElementById('cellE23').disabled = true;
  }
}
function Alerting24()
{
  document.getElementById('cellE24').value = Array2[3];
  if(Array2[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE24').style.backgroundColor = "green";
    document.getElementById('cellE24').innerHTML = Array2[3];
    ScoreTime();
    document.getElementById('cellE24').disabled = true;
  }
}
function Alerting25()
{
  document.getElementById('cellE25').value = Array2[4];
  if(Array2[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE25').style.backgroundColor = "green";
    document.getElementById('cellE25').innerHTML = Array2[4];
    ScoreTime();
    document.getElementById('cellE25').disabled = true;
  }
}
function Alerting26()
{
  document.getElementById('cellE26').value = Array2[5];
  if(Array2[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE26').style.backgroundColor = "green";
    document.getElementById('cellE26').innerHTML = Array2[5];
    ScoreTime();
    document.getElementById('cellE26').disabled = true;
  }
}
function Alerting27()
{
  document.getElementById('cellE27').value = Array2[6];
  if(Array2[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE27').style.backgroundColor = "green";
    document.getElementById('cellE27').innerHTML = Array2[6];
    ScoreTime();
    document.getElementById('cellE27').disabled = true;
  }
}
function Alerting28()
{
  document.getElementById('cellE28').value = Array2[7];
  if(Array2[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE28').style.backgroundColor = "green";
    document.getElementById('cellE28').innerHTML = Array2[7];
    ScoreTime();
    document.getElementById('cellE28').disabled = true;
  }
}
function Alerting29()
{
  document.getElementById('cellE29').value = Array2[8];
  if(Array2[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE29').style.backgroundColor = "green";
    document.getElementById('cellE29').innerHTML = Array2[8];
    ScoreTime();
    document.getElementById('cellE29').disabled = true;
  }
}
function Alerting30()
{
  document.getElementById('cellE30').value = Array2[9];
  if(Array2[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE30').style.backgroundColor = "green";
    document.getElementById('cellE30').innerHTML = Array2[9];
    ScoreTime();
    document.getElementById('cellE30').disabled = true;
  }
}
function Alerting31()
{
  document.getElementById('cellE31').value = Array2[10];
  if(Array2[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE31').style.backgroundColor = "green";
    document.getElementById('cellE31').innerHTML = Array2[10];
    ScoreTime();
    document.getElementById('cellE31').disabled = true;
  }
}
function Alerting32()
{
  document.getElementById('cellE32').value = Array2[11];
  if(Array2[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE32').style.backgroundColor = "green";
    document.getElementById('cellE32').innerHTML = Array2[11];
    ScoreTime();
    document.getElementById('cellE32').disabled = true;
  }
}
function Alerting33()
{
  document.getElementById('cellE33').value = Array2[12];
  if(Array2[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE33').style.backgroundColor = "green";
    document.getElementById('cellE33').innerHTML = Array2[12];
    ScoreTime();
    document.getElementById('cellE33').disabled = true;
  }
}
function Alerting34()
{
  document.getElementById('cellE34').value = Array2[13];
  if(Array2[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE34').style.backgroundColor = "green";
    document.getElementById('cellE34').innerHTML = Array2[13];
    ScoreTime();
    document.getElementById('cellE34').disabled = true;
  }
}
function Alerting35()
{
  document.getElementById('cellE35').value = Array2[14];
  if(Array2[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE35').style.backgroundColor = "green";
    document.getElementById('cellE35').innerHTML = Array2[14];
    ScoreTime();
    document.getElementById('cellE35').disabled = true;
  }
}
function Alerting36()
{
  document.getElementById('cellE36').value = Array2[15];
  if(Array2[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE36').style.backgroundColor = "green";
    document.getElementById('cellE36').innerHTML = Array2[15];
    ScoreTime();
    document.getElementById('cellE36').disabled = true;
  }
}
function Alerting37()
{
  document.getElementById('cellE37').value = Array2[16];
  if(Array2[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE37').style.backgroundColor = "green";
    document.getElementById('cellE37').innerHTML = Array2[16];
    ScoreTime();
    document.getElementById('cellE37').disabled = true;
  }
}
function Alerting38()
{
  document.getElementById('cellE38').value = Array2[17];
  if(Array2[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE38').style.backgroundColor = "green";
    document.getElementById('cellE38').innerHTML = Array2[17];
    ScoreTime();
    document.getElementById('cellE38').disabled = true;
  }
}
function Alerting39()
{
  document.getElementById('cellE39').value = Array2[18];
  if(Array2[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE39').style.backgroundColor = "green";
    document.getElementById('cellE39').innerHTML = Array2[18];
    ScoreTime();
    document.getElementById('cellE39').disabled = true;
  }
}
function Alerting40()
{
  document.getElementById('cellE40').value = Array2[19];
  if(Array2[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE40').style.backgroundColor = "green";
    document.getElementById('cellE40').innerHTML = Array2[19];
    ScoreTime();
    document.getElementById('cellE40').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting41()
{
  document.getElementById('cellE41').value = Array3[0];
  if(Array3[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE41').style.backgroundColor = "green";
    document.getElementById('cellE41').innerHTML = Array3[0];
    ScoreTime();
    document.getElementById('cellE41').disabled = true;
  }
}
function Alerting42()
{
  document.getElementById('cellE42').value = Array3[1];
  if(Array3[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE42').style.backgroundColor = "green";
    document.getElementById('cellE42').innerHTML = Array3[1];
    ScoreTime();
    document.getElementById('cellE42').disabled = true;
  }
}
function Alerting43()
{
  document.getElementById('cellE43').value = Array3[2];
  if(Array3[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE43').style.backgroundColor = "green";
    document.getElementById('cellE43').innerHTML = Array3[2];
    ScoreTime();
    document.getElementById('cellE43').disabled = true;
  }
}
function Alerting44()
{
  document.getElementById('cellE44').value = Array3[3];
  if(Array3[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE44').style.backgroundColor = "green";
    document.getElementById('cellE44').innerHTML = Array3[3];
    ScoreTime();
    document.getElementById('cellE44').disabled = true;
  }
}
function Alerting45()
{
  document.getElementById('cellE45').value = Array3[4];
  if(Array3[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE45').style.backgroundColor = "green";
    document.getElementById('cellE45').innerHTML = Array3[4];
    ScoreTime();
    document.getElementById('cellE45').disabled = true;
  }
}
function Alerting46()
{
  document.getElementById('cellE46').value = Array3[5];
  if(Array3[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE46').style.backgroundColor = "green";
    document.getElementById('cellE46').innerHTML = Array3[5];
    ScoreTime();
    document.getElementById('cellE46').disabled = true;
  }
}
function Alerting47()
{
  document.getElementById('cellE47').value = Array3[6];
  if(Array3[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE47').style.backgroundColor = "green";
    document.getElementById('cellE47').innerHTML = Array3[6];
    ScoreTime();
    document.getElementById('cellE47').disabled = true;
  }
}
function Alerting48()
{
  document.getElementById('cellE48').value = Array3[7];
  if(Array3[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE48').style.backgroundColor = "green";
    document.getElementById('cellE48').innerHTML = Array3[7];
    ScoreTime();
    document.getElementById('cellE48').disabled = true;
  }
}
function Alerting49()
{
  document.getElementById('cellE49').value = Array3[8];
  if(Array3[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE49').style.backgroundColor = "green";
    document.getElementById('cellE49').innerHTML = Array3[8];
    ScoreTime();
    document.getElementById('cellE49').disabled = true;
  }
}
function Alerting50()
{
  document.getElementById('cellE50').value = Array3[9];
  if(Array3[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE50').style.backgroundColor = "green";
    document.getElementById('cellE50').innerHTML = Array3[9];
    ScoreTime();
    document.getElementById('cellE50').disabled = true;
  }
}
function Alerting51()
{
  document.getElementById('cellE51').value = Array3[10];
  if(Array3[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE51').style.backgroundColor = "green";
    document.getElementById('cellE51').innerHTML = Array3[10];
    ScoreTime();
    document.getElementById('cellE51').disabled = true;
  }
}
function Alerting52()
{
  document.getElementById('cellE52').value = Array3[11];
  if(Array3[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE52').style.backgroundColor = "green";
    document.getElementById('cellE52').innerHTML = Array3[11];
    ScoreTime();
    document.getElementById('cellE52').disabled = true;
  }
}
function Alerting53()
{
  document.getElementById('cellE53').value = Array3[12];
  if(Array3[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE53').style.backgroundColor = "green";
    document.getElementById('cellE53').innerHTML = Array3[12];
    ScoreTime();
    document.getElementById('cellE53').disabled = true;
  }
}
function Alerting54()
{
  document.getElementById('cellE54').value = Array3[13];
  if(Array3[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE54').style.backgroundColor = "green";
    document.getElementById('cellE54').innerHTML = Array3[13];
    ScoreTime();
    document.getElementById('cellE54').disabled = true;
  }
}
function Alerting55()
{
  document.getElementById('cellE55').value = Array3[14];
  if(Array3[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE55').style.backgroundColor = "green";
    document.getElementById('cellE55').innerHTML = Array3[14];
    ScoreTime();
    document.getElementById('cellE55').disabled = true;
  }
}
function Alerting56()
{
  document.getElementById('cellE56').value = Array3[15];
  if(Array3[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE56').style.backgroundColor = "green";
    document.getElementById('cellE56').innerHTML = Array3[15];
    ScoreTime();
    document.getElementById('cellE56').disabled = true;
  }
}
function Alerting57()
{
  document.getElementById('cellE57').value = Array3[16];
  if(Array3[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE57').style.backgroundColor = "green";
    document.getElementById('cellE57').innerHTML = Array3[16];
    ScoreTime();
    document.getElementById('cellE57').disabled = true;
  }
}
function Alerting58()
{
  document.getElementById('cellE58').value = Array3[17];
  if(Array3[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE58').style.backgroundColor = "green";
    document.getElementById('cellE58').innerHTML = Array3[17];
    ScoreTime();
    document.getElementById('cellE58').disabled = true;
  }
}
function Alerting59()
{
  document.getElementById('cellE59').value = Array3[18];
  if(Array3[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE59').style.backgroundColor = "green";
    document.getElementById('cellE59').innerHTML = Array3[18];
    ScoreTime();
    document.getElementById('cellE59').disabled = true;
  }
}
function Alerting60()
{
  document.getElementById('cellE60').value = Array3[19];
  if(Array3[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE60').style.backgroundColor = "green";
    document.getElementById('cellE60').innerHTML = Array3[19];
    ScoreTime();
    document.getElementById('cellE60').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting61()
{
  document.getElementById('cellE61').value = Array4[0];
  if(Array4[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE61').style.backgroundColor = "green";
    document.getElementById('cellE61').innerHTML = Array4[0];
    ScoreTime();
    document.getElementById('cellE61').disabled = true;
  }
}
function Alerting62()
{
  document.getElementById('cellE62').value = Array4[1];
  if(Array4[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE62').style.backgroundColor = "green";
    document.getElementById('cellE62').innerHTML = Array4[1];
    ScoreTime();
    document.getElementById('cellE62').disabled = true;
  }
}
function Alerting63()
{
  document.getElementById('cellE63').value = Array4[2];
  if(Array4[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE63').style.backgroundColor = "green";
    document.getElementById('cellE63').innerHTML = Array4[2];
    ScoreTime();
    document.getElementById('cellE63').disabled = true;
  }
}
function Alerting64()
{
  document.getElementById('cellE64').value = Array4[3];
  if(Array4[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE64').style.backgroundColor = "green";
    document.getElementById('cellE64').innerHTML = Array4[3];
    ScoreTime();
    document.getElementById('cellE64').disabled = true;
  }
}
function Alerting65()
{
  document.getElementById('cellE65').value = Array4[4];
  if(Array4[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE65').style.backgroundColor = "green";
    document.getElementById('cellE65').innerHTML = Array4[4];
    ScoreTime();
    document.getElementById('cellE65').disabled = true;
  }
}
function Alerting66()
{
  document.getElementById('cellE66').value = Array4[5];
  if(Array4[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE66').style.backgroundColor = "green";
    document.getElementById('cellE66').innerHTML = Array4[5];
    ScoreTime();
    document.getElementById('cellE66').disabled = true;
  }
}
function Alerting67()
{
  document.getElementById('cellE67').value = Array4[6];
  if(Array4[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE67').style.backgroundColor = "green";
    document.getElementById('cellE67').innerHTML = Array4[6];
    ScoreTime();
    document.getElementById('cellE67').disabled = true;
  }
}
function Alerting68()
{
  document.getElementById('cellE68').value = Array4[7];
  if(Array4[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE68').style.backgroundColor = "green";
    document.getElementById('cellE68').innerHTML = Array4[7];
    ScoreTime();
    document.getElementById('cellE68').disabled = true;
  }
}
function Alerting69()
{
  document.getElementById('cellE69').value = Array4[8];
  if(Array4[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE69').style.backgroundColor = "green";
    document.getElementById('cellE69').innerHTML = Array4[8];
    ScoreTime();
    document.getElementById('cellE69').disabled = true;
  }
}
function Alerting70()
{
  document.getElementById('cellE70').value = Array4[9];
  if(Array4[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE70').style.backgroundColor = "green";
    document.getElementById('cellE70').innerHTML = Array4[9];
    ScoreTime();
    document.getElementById('cellE70').disabled = true;
  }
}
function Alerting71()
{
  document.getElementById('cellE71').value = Array4[10];
  if(Array4[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE71').style.backgroundColor = "green";
    document.getElementById('cellE71').innerHTML = Array4[10];
    ScoreTime();
    document.getElementById('cellE71').disabled = true;
  }
}
function Alerting72()
{
  document.getElementById('cellE72').value = Array4[11];
  if(Array4[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE72').style.backgroundColor = "green";
    document.getElementById('cellE72').innerHTML = Array4[11];
    ScoreTime();
    document.getElementById('cellE72').disabled = true;
  }
}
function Alerting73()
{
  document.getElementById('cellE73').value = Array4[12];
  if(Array4[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE73').style.backgroundColor = "green";
    document.getElementById('cellE73').innerHTML = Array4[12];
    ScoreTime();
    document.getElementById('cellE73').disabled = true;
  }
}
function Alerting74()
{
  document.getElementById('cellE74').value = Array4[13];
  if(Array4[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE74').style.backgroundColor = "green";
    document.getElementById('cellE74').innerHTML = Array4[13];
    ScoreTime();
    document.getElementById('cellE74').disabled = true;
  }
}
function Alerting75()
{
  document.getElementById('cellE75').value = Array4[14];
  if(Array4[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE75').style.backgroundColor = "green";
    document.getElementById('cellE75').innerHTML = Array4[14];
    ScoreTime();
    document.getElementById('cellE75').disabled = true;
  }
}
function Alerting76()
{
  document.getElementById('cellE76').value = Array4[15];
  if(Array4[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE76').style.backgroundColor = "green";
    document.getElementById('cellE76').innerHTML = Array4[15];
    ScoreTime();
    document.getElementById('cellE76').disabled = true;
  }
}
function Alerting77()
{
  document.getElementById('cellE77').value = Array4[16];
  if(Array4[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE77').style.backgroundColor = "green";
    document.getElementById('cellE77').innerHTML = Array4[16];
    ScoreTime();
    document.getElementById('cellE77').disabled = true;
  }
}
function Alerting78()
{
  document.getElementById('cellE78').value = Array4[17];
  if(Array4[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE78').style.backgroundColor = "green";
    document.getElementById('cellE78').innerHTML = Array4[17];
    ScoreTime();
    document.getElementById('cellE78').disabled = true;
  }
}
function Alerting79()
{
  document.getElementById('cellE79').value = Array4[18];
  if(Array4[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE79').style.backgroundColor = "green";
    document.getElementById('cellE79').innerHTML = Array4[18];
    ScoreTime();
    document.getElementById('cellE79').disabled = true;
  }
}
function Alerting80()
{
  document.getElementById('cellE80').value = Array4[19];
  if(Array4[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE80').style.backgroundColor = "green";
    document.getElementById('cellE80').innerHTML = Array4[19];
    ScoreTime();
    document.getElementById('cellE80').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting81()
{
  document.getElementById('cellE81').value = Array5[0];
  if(Array5[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE81').style.backgroundColor = "green";
    document.getElementById('cellE81').innerHTML = Array5[0];
    ScoreTime();
    document.getElementById('cellE81').disabled = true;
  }
}
function Alerting82()
{
  document.getElementById('cellE82').value = Array5[1];
  if(Array5[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE82').style.backgroundColor = "green";
    document.getElementById('cellE82').innerHTML = Array5[1];
    ScoreTime();
    document.getElementById('cellE82').disabled = true;
  }
}
function Alerting83()
{
  document.getElementById('cellE83').value = Array5[2];
  if(Array5[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE83').style.backgroundColor = "green";
    document.getElementById('cellE83').innerHTML = Array5[2];
    ScoreTime();
    document.getElementById('cellE83').disabled = true;
  }
}
function Alerting84()
{
  document.getElementById('cellE84').value = Array5[3];
  if(Array5[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE84').style.backgroundColor = "green";
    document.getElementById('cellE84').innerHTML = Array5[3];
    ScoreTime();
    document.getElementById('cellE84').disabled = true;
  }
}
function Alerting85()
{
  document.getElementById('cellE85').value = Array5[4];
  if(Array5[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE85').style.backgroundColor = "green";
    document.getElementById('cellE85').innerHTML = Array5[4];
    ScoreTime();
    document.getElementById('cellE85').disabled = true;
  }
}
function Alerting86()
{
  document.getElementById('cellE86').value = Array5[5];
  if(Array5[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE86').style.backgroundColor = "green";
    document.getElementById('cellE86').innerHTML = Array5[5];
    ScoreTime();
    document.getElementById('cellE86').disabled = true;
  }
}
function Alerting87()
{
  document.getElementById('cellE87').value = Array5[6];
  if(Array5[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE87').style.backgroundColor = "green";
    document.getElementById('cellE87').innerHTML = Array5[6];
    ScoreTime();
    document.getElementById('cellE87').disabled = true;
  }
}
function Alerting88()
{
  document.getElementById('cellE88').value = Array5[7];
  if(Array5[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE88').style.backgroundColor = "green";
    document.getElementById('cellE88').innerHTML = Array5[7];
    ScoreTime();
    document.getElementById('cellE88').disabled = true;
  }
}
function Alerting89()
{
  document.getElementById('cellE89').value = Array5[8];
  if(Array5[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE89').style.backgroundColor = "green";
    document.getElementById('cellE89').innerHTML = Array5[8];
    ScoreTime();
    document.getElementById('cellE89').disabled = true;
  }
}
function Alerting90()
{
  document.getElementById('cellE90').value = Array5[9];
  if(Array5[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE90').style.backgroundColor = "green";
    document.getElementById('cellE90').innerHTML = Array5[9];
    ScoreTime();
    document.getElementById('cellE90').disabled = true;
  }
}
function Alerting91()
{
  document.getElementById('cellE91').value = Array5[10];
  if(Array5[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE91').style.backgroundColor = "green";
    document.getElementById('cellE91').innerHTML = Array5[10];
    ScoreTime();
    document.getElementById('cellE91').disabled = true;
  }
}
function Alerting92()
{
  document.getElementById('cellE92').value = Array5[11];
  if(Array5[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE92').style.backgroundColor = "green";
    document.getElementById('cellE92').innerHTML = Array5[11];
    ScoreTime();
    document.getElementById('cellE92').disabled = true;
  }
}
function Alerting93()
{
  document.getElementById('cellE93').value = Array5[12];
  if(Array5[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE93').style.backgroundColor = "green";
    document.getElementById('cellE93').innerHTML = Array5[12];
    ScoreTime();
    document.getElementById('cellE93').disabled = true;
  }
}
function Alerting94()
{
  document.getElementById('cellE94').value = Array5[13];
  if(Array5[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE94').style.backgroundColor = "green";
    document.getElementById('cellE94').innerHTML = Array5[13];
    ScoreTime();
    document.getElementById('cellE94').disabled = true;
  }
}
function Alerting95()
{
  document.getElementById('cellE95').value = Array5[14];
  if(Array5[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE95').style.backgroundColor = "green";
    document.getElementById('cellE95').innerHTML = Array5[14];
    ScoreTime();
    document.getElementById('cellE95').disabled = true;
  }
}
function Alerting96()
{
  document.getElementById('cellE96').value = Array5[15];
  if(Array5[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE96').style.backgroundColor = "green";
    document.getElementById('cellE96').innerHTML = Array5[15];
    ScoreTime();
    document.getElementById('cellE96').disabled = true;
  }
}
function Alerting97()
{
  document.getElementById('cellE97').value = Array5[16];
  if(Array5[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE97').style.backgroundColor = "green";
    document.getElementById('cellE97').innerHTML = Array5[16];
    ScoreTime();
    document.getElementById('cellE97').disabled = true;
  }
}
function Alerting98()
{
  document.getElementById('cellE98').value = Array5[17];
  if(Array5[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE98').style.backgroundColor = "green";
    document.getElementById('cellE98').innerHTML = Array5[17];
    ScoreTime();
    document.getElementById('cellE98').disabled = true;
  }
}
function Alerting99()
{
  document.getElementById('cellE99').value = Array5[18];
  if(Array5[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE99').style.backgroundColor = "green";
    document.getElementById('cellE99').innerHTML = Array5[18];
    ScoreTime();
    document.getElementById('cellE99').disabled = true;
  }
}
function Alerting100()
{
  document.getElementById('cellE100').value = Array5[19];
  if(Array5[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE100').style.backgroundColor = "green";
    document.getElementById('cellE100').innerHTML = Array5[19];
    ScoreTime();
    document.getElementById('cellE100').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting101()
{
  document.getElementById('cellE101').value = Array6[0];
  if(Array6[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE101').style.backgroundColor = "green";
    document.getElementById('cellE101').innerHTML = Array6[0];
    ScoreTime();
    document.getElementById('cellE101').disabled = true;
  }
}
function Alerting102()
{
  document.getElementById('cellE102').value = Array6[1];
  if(Array6[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE102').style.backgroundColor = "green";
    document.getElementById('cellE102').innerHTML = Array6[1];
    ScoreTime();
    document.getElementById('cellE102').disabled = true;
  }
}
function Alerting103()
{
  document.getElementById('cellE103').value = Array6[2];
  if(Array6[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE103').style.backgroundColor = "green";
    document.getElementById('cellE103').innerHTML = Array6[2];
    ScoreTime();
    document.getElementById('cellE103').disabled = true;
  }
}
function Alerting104()
{
  document.getElementById('cellE104').value = Array6[3];
  if(Array6[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE104').style.backgroundColor = "green";
    document.getElementById('cellE104').innerHTML = Array6[3];
    ScoreTime();
    document.getElementById('cellE104').disabled = true;
  }
}
function Alerting105()
{
  document.getElementById('cellE105').value = Array6[4];
  if(Array6[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE105').style.backgroundColor = "green";
    document.getElementById('cellE105').innerHTML = Array6[4];
    ScoreTime();
    document.getElementById('cellE105').disabled = true;
  }
}
function Alerting106()
{
  document.getElementById('cellE106').value = Array6[5];
  if(Array6[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE106').style.backgroundColor = "green";
    document.getElementById('cellE106').innerHTML = Array6[5];
    ScoreTime();
    document.getElementById('cellE106').disabled = true;
  }
}
function Alerting107()
{
  document.getElementById('cellE107').value = Array6[6];
  if(Array6[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE107').style.backgroundColor = "green";
    document.getElementById('cellE107').innerHTML = Array6[6];
    ScoreTime();
    document.getElementById('cellE107').disabled = true;
  }
}
function Alerting108()
{
  document.getElementById('cellE108').value = Array6[7];
  if(Array6[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE108').style.backgroundColor = "green";
    document.getElementById('cellE108').innerHTML = Array6[7];
    ScoreTime();
    document.getElementById('cellE108').disabled = true;
  }
}
function Alerting109()
{
  document.getElementById('cellE109').value = Array6[8];
  if(Array6[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE109').style.backgroundColor = "green";
    document.getElementById('cellE109').innerHTML = Array6[8];
    ScoreTime();
    document.getElementById('cellE109').disabled = true;
  }
}
function Alerting110()
{
  document.getElementById('cellE110').value = Array6[9];
  if(Array6[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE110').style.backgroundColor = "green";
    document.getElementById('cellE110').innerHTML = Array6[9];
    ScoreTime();
    document.getElementById('cellE110').disabled = true;
  }
}
function Alerting111()
{
  document.getElementById('cellE111').value = Array6[10];
  if(Array6[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE111').style.backgroundColor = "green";
    document.getElementById('cellE111').innerHTML = Array6[10];
    ScoreTime();
    document.getElementById('cellE111').disabled = true;
  }
}
function Alerting112()
{
  document.getElementById('cellE112').value = Array6[11];
  if(Array6[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE112').style.backgroundColor = "green";
    document.getElementById('cellE112').innerHTML = Array6[11];
    ScoreTime();
    document.getElementById('cellE112').disabled = true;
  }
}
function Alerting113()
{
  document.getElementById('cellE113').value = Array6[12];
  if(Array6[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE113').style.backgroundColor = "green";
    document.getElementById('cellE113').innerHTML = Array6[12];
    ScoreTime();
    document.getElementById('cellE113').disabled = true;
  }
}
function Alerting114()
{
  document.getElementById('cellE114').value = Array6[13];
  if(Array6[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE114').style.backgroundColor = "green";
    document.getElementById('cellE114').innerHTML = Array6[13];
    ScoreTime();
    document.getElementById('cellE114').disabled = true;
  }
}
function Alerting115()
{
  document.getElementById('cellE115').value = Array6[14];
  if(Array6[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE115').style.backgroundColor = "green";
    document.getElementById('cellE115').innerHTML = Array6[14];
    ScoreTime();
    document.getElementById('cellE115').disabled = true;
  }
}
function Alerting116()
{
  document.getElementById('cellE116').value = Array6[15];
  if(Array6[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE116').style.backgroundColor = "green";
    document.getElementById('cellE116').innerHTML = Array6[15];
    ScoreTime();
    document.getElementById('cellE116').disabled = true;
  }
}
function Alerting117()
{
  document.getElementById('cellE117').value = Array6[16];
  if(Array6[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE117').style.backgroundColor = "green";
    document.getElementById('cellE117').innerHTML = Array6[16];
    ScoreTime();
    document.getElementById('cellE117').disabled = true;
  }
}
function Alerting118()
{
  document.getElementById('cellE118').value = Array6[17];
  if(Array6[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE118').style.backgroundColor = "green";
    document.getElementById('cellE118').innerHTML = Array6[17];
    ScoreTime();
    document.getElementById('cellE118').disabled = true;
  }
}
function Alerting119()
{
  document.getElementById('cellE119').value = Array6[18];
  if(Array6[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE119').style.backgroundColor = "green";
    document.getElementById('cellE119').innerHTML = Array6[18];
    ScoreTime();
    document.getElementById('cellE119').disabled = true;
  }
}
function Alerting120()
{
  document.getElementById('cellE120').value = Array6[19];
  if(Array6[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE120').style.backgroundColor = "green";
    document.getElementById('cellE120').innerHTML = Array6[19];
    ScoreTime();
    document.getElementById('cellE120').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting121()
{
  document.getElementById('cellE121').value = Array7[0];
  if(Array7[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE121').style.backgroundColor = "green";
    document.getElementById('cellE121').innerHTML = Array7[0];
    ScoreTime();
    document.getElementById('cellE121').disabled = true;
  }
}
function Alerting122()
{
  document.getElementById('cellE122').value = Array7[1];
  if(Array7[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE122').style.backgroundColor = "green";
    document.getElementById('cellE122').innerHTML = Array7[1];
    ScoreTime();
    document.getElementById('cellE122').disabled = true;
  }
}
function Alerting123()
{
  document.getElementById('cellE123').value = Array7[2];
  if(Array7[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE123').style.backgroundColor = "green";
    document.getElementById('cellE123').innerHTML = Array7[2];
    ScoreTime();
    document.getElementById('cellE123').disabled = true;
  }
}
function Alerting124()
{
  document.getElementById('cellE124').value = Array7[3];
  if(Array7[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE124').style.backgroundColor = "green";
    document.getElementById('cellE124').innerHTML = Array7[3];
    ScoreTime();
    document.getElementById('cellE124').disabled = true;
  }
}
function Alerting125()
{
  document.getElementById('cellE125').value = Array7[4];
  if(Array7[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE125').style.backgroundColor = "green";
    document.getElementById('cellE125').innerHTML = Array7[4];
    ScoreTime();
    document.getElementById('cellE125').disabled = true;
  }
}
function Alerting126()
{
  document.getElementById('cellE126').value = Array7[5];
  if(Array7[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE126').style.backgroundColor = "green";
    document.getElementById('cellE126').innerHTML = Array7[5];
    ScoreTime();
    document.getElementById('cellE126').disabled = true;
  }
}
function Alerting127()
{
  document.getElementById('cellE127').value = Array7[6];
  if(Array7[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE127').style.backgroundColor = "green";
    document.getElementById('cellE127').innerHTML = Array7[6];
    ScoreTime();
    document.getElementById('cellE127').disabled = true;
  }
}
function Alerting128()
{
  document.getElementById('cellE128').value = Array7[7];
  if(Array7[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE128').style.backgroundColor = "green";
    document.getElementById('cellE128').innerHTML = Array7[7];
    ScoreTime();
    document.getElementById('cellE128').disabled = true;
  }
}
function Alerting129()
{
  document.getElementById('cellE129').value = Array7[8];
  if(Array7[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE129').style.backgroundColor = "green";
    document.getElementById('cellE129').innerHTML = Array7[8];
    ScoreTime();
    document.getElementById('cellE129').disabled = true;
  }
}
function Alerting130()
{
  document.getElementById('cellE130').value = Array7[9];
  if(Array7[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE130').style.backgroundColor = "green";
    document.getElementById('cellE130').innerHTML = Array7[9];
    ScoreTime();
    document.getElementById('cellE130').disabled = true;
  }
}
function Alerting131()
{
  document.getElementById('cellE131').value = Array7[10];
  if(Array7[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE131').style.backgroundColor = "green";
    document.getElementById('cellE131').innerHTML = Array7[10];
    ScoreTime();
    document.getElementById('cellE131').disabled = true;
  }
}
function Alerting132()
{
  document.getElementById('cellE132').value = Array7[11];
  if(Array7[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE132').style.backgroundColor = "green";
    document.getElementById('cellE132').innerHTML = Array7[11];
    ScoreTime();
    document.getElementById('cellE132').disabled = true;
  }
}
function Alerting133()
{
  document.getElementById('cellE133').value = Array7[12];
  if(Array7[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE133').style.backgroundColor = "green";
    document.getElementById('cellE133').innerHTML = Array7[12];
    ScoreTime();
    document.getElementById('cellE133').disabled = true;
  }
}
function Alerting134()
{
  document.getElementById('cellE134').value = Array7[13];
  if(Array7[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE134').style.backgroundColor = "green";
    document.getElementById('cellE134').innerHTML = Array7[13];
    ScoreTime();
    document.getElementById('cellE134').disabled = true;
  }
}
function Alerting135()
{
  document.getElementById('cellE135').value = Array7[14];
  if(Array7[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE135').style.backgroundColor = "green";
    document.getElementById('cellE135').innerHTML = Array7[14];
    ScoreTime();
    document.getElementById('cellE135').disabled = true;
  }
}
function Alerting136()
{
  document.getElementById('cellE136').value = Array7[15];
  if(Array7[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE136').style.backgroundColor = "green";
    document.getElementById('cellE136').innerHTML = Array7[15];
    ScoreTime();
    document.getElementById('cellE136').disabled = true;
  }
}
function Alerting137()
{
  document.getElementById('cellE137').value = Array7[16];
  if(Array7[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE137').style.backgroundColor = "green";
    document.getElementById('cellE137').innerHTML = Array7[16];
    ScoreTime();
    document.getElementById('cellE137').disabled = true;
  }
}
function Alerting138()
{
  document.getElementById('cellE138').value = Array7[17];
  if(Array7[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE138').style.backgroundColor = "green";
    document.getElementById('cellE138').innerHTML = Array7[17];
    ScoreTime();
    document.getElementById('cellE138').disabled = true;
  }
}
function Alerting139()
{
  document.getElementById('cellE139').value = Array7[18];
  if(Array7[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE139').style.backgroundColor = "green";
    document.getElementById('cellE139').innerHTML = Array7[18];
    ScoreTime();
    document.getElementById('cellE139').disabled = true;
  }
}
function Alerting140()
{
  document.getElementById('cellE140').value = Array7[19];
  if(Array7[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE140').style.backgroundColor = "green";
    document.getElementById('cellE140').innerHTML = Array7[19];
    ScoreTime();
    document.getElementById('cellE140').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting141()
{
  document.getElementById('cellE141').value = Array8[0];
  if(Array8[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE141').style.backgroundColor = "green";
    document.getElementById('cellE141').innerHTML = Array8[0];
    ScoreTime();
    document.getElementById('cellE141').disabled = true;
  }
}
function Alerting142()
{
  document.getElementById('cellE142').value = Array8[1];
  if(Array8[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE142').style.backgroundColor = "green";
    document.getElementById('cellE142').innerHTML = Array8[1];
    ScoreTime();
    document.getElementById('cellE142').disabled = true;
  }
}
function Alerting143()
{
  document.getElementById('cellE143').value = Array8[2];
  if(Array8[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE143').style.backgroundColor = "green";
    document.getElementById('cellE143').innerHTML = Array8[2];
    ScoreTime();
    document.getElementById('cellE143').disabled = true;
  }
}
function Alerting144()
{
  document.getElementById('cellE144').value = Array8[3];
  if(Array8[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE144').style.backgroundColor = "green";
    document.getElementById('cellE144').innerHTML = Array8[3];
    ScoreTime();
    document.getElementById('cellE144').disabled = true;
  }
}
function Alerting145()
{
  document.getElementById('cellE145').value = Array8[4];
  if(Array8[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE145').style.backgroundColor = "green";
    document.getElementById('cellE145').innerHTML = Array8[4];
    ScoreTime();
    document.getElementById('cellE145').disabled = true;
  }
}
function Alerting146()
{
  document.getElementById('cellE146').value = Array8[5];
  if(Array8[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE146').style.backgroundColor = "green";
    document.getElementById('cellE146').innerHTML = Array8[5];
    ScoreTime();
    document.getElementById('cellE146').disabled = true;
  }
}
function Alerting147()
{
  document.getElementById('cellE147').value = Array8[6];
  if(Array8[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE147').style.backgroundColor = "green";
    document.getElementById('cellE147').innerHTML = Array8[6];
    ScoreTime();
    document.getElementById('cellE147').disabled = true;
  }
}
function Alerting148()
{
  document.getElementById('cellE148').value = Array8[7];
  if(Array8[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE148').style.backgroundColor = "green";
    document.getElementById('cellE148').innerHTML = Array8[7];
    ScoreTime();
    document.getElementById('cellE148').disabled = true;
  }
}
function Alerting149()
{
  document.getElementById('cellE149').value = Array8[8];
  if(Array8[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE149').style.backgroundColor = "green";
    document.getElementById('cellE149').innerHTML = Array8[8];
    ScoreTime();
    document.getElementById('cellE149').disabled = true;
  }
}
function Alerting150()
{
  document.getElementById('cellE150').value = Array8[9];
  if(Array8[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE150').style.backgroundColor = "green";
    document.getElementById('cellE150').innerHTML = Array8[9];
    ScoreTime();
    document.getElementById('cellE150').disabled = true;
  }
}
function Alerting151()
{
  document.getElementById('cellE151').value = Array8[10];
  if(Array8[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE151').style.backgroundColor = "green";
    document.getElementById('cellE151').innerHTML = Array8[10];
    ScoreTime();
    document.getElementById('cellE151').disabled = true;
  }
}
function Alerting152()
{
  document.getElementById('cellE152').value = Array8[11];
  if(Array8[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE152').style.backgroundColor = "green";
    document.getElementById('cellE152').innerHTML = Array8[11];
    ScoreTime();
    document.getElementById('cellE152').disabled = true;
  }
}
function Alerting153()
{
  document.getElementById('cellE153').value = Array8[12];
  if(Array8[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE153').style.backgroundColor = "green";
    document.getElementById('cellE153').innerHTML = Array8[12];
    ScoreTime();
    document.getElementById('cellE153').disabled = true;
  }
}
function Alerting154()
{
  document.getElementById('cellE154').value = Array8[13];
  if(Array8[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE154').style.backgroundColor = "green";
    document.getElementById('cellE154').innerHTML = Array8[13];
    ScoreTime();
    document.getElementById('cellE154').disabled = true;
  }
}
function Alerting155()
{
  document.getElementById('cellE155').value = Array8[14];
  if(Array8[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE155').style.backgroundColor = "green";
    document.getElementById('cellE155').innerHTML = Array8[14];
    ScoreTime();
    document.getElementById('cellE155').disabled = true;
  }
}
function Alerting156()
{
  document.getElementById('cellE156').value = Array8[15];
  if(Array8[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE156').style.backgroundColor = "green";
    document.getElementById('cellE156').innerHTML = Array8[15];
    ScoreTime();
    document.getElementById('cellE156').disabled = true;
  }
}
function Alerting157()
{
  document.getElementById('cellE157').value = Array8[16];
  if(Array8[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE157').style.backgroundColor = "green";
    document.getElementById('cellE157').innerHTML = Array8[16];
    ScoreTime();
    document.getElementById('cellE157').disabled = true;
  }
}
function Alerting158()
{
  document.getElementById('cellE158').value = Array8[17];
  if(Array8[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE158').style.backgroundColor = "green";
    document.getElementById('cellE158').innerHTML = Array8[17];
    ScoreTime();
    document.getElementById('cellE158').disabled = true;
  }
}
function Alerting159()
{
  document.getElementById('cellE159').value = Array8[18];
  if(Array8[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE159').style.backgroundColor = "green";
    document.getElementById('cellE159').innerHTML = Array8[18];
    ScoreTime();
    document.getElementById('cellE159').disabled = true;
  }
}
function Alerting160()
{
  document.getElementById('cellE160').value = Array8[19];
  if(Array8[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE160').style.backgroundColor = "green";
    document.getElementById('cellE160').innerHTML = Array8[19];
    ScoreTime();
    document.getElementById('cellE160').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting161()
{
  document.getElementById('cellE161').value = Array9[0];
  if(Array9[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE161').style.backgroundColor = "green";
    document.getElementById('cellE161').innerHTML = Array9[0];
    ScoreTime();
    document.getElementById('cellE161').disabled = true;
  }
}
function Alerting162()
{
  document.getElementById('cellE162').value = Array9[1];
  if(Array9[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE162').style.backgroundColor = "green";
    document.getElementById('cellE162').innerHTML = Array9[1];
    ScoreTime();
    document.getElementById('cellE162').disabled = true;
  }
}
function Alerting163()
{
  document.getElementById('cellE163').value = Array9[2];
  if(Array9[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE163').style.backgroundColor = "green";
    document.getElementById('cellE163').innerHTML = Array9[2];
    ScoreTime();
    document.getElementById('cellE163').disabled = true;
  }
}
function Alerting164()
{
  document.getElementById('cellE164').value = Array9[3];
  if(Array9[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE164').style.backgroundColor = "green";
    document.getElementById('cellE164').innerHTML = Array9[3];
    ScoreTime();
    document.getElementById('cellE164').disabled = true;
  }
}
function Alerting165()
{
  document.getElementById('cellE165').value = Array9[4];
  if(Array9[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE165').style.backgroundColor = "green";
    document.getElementById('cellE165').innerHTML = Array9[4];
    ScoreTime();
    document.getElementById('cellE165').disabled = true;
  }
}
function Alerting166()
{
  document.getElementById('cellE166').value = Array9[5];
  if(Array9[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE166').style.backgroundColor = "green";
    document.getElementById('cellE166').innerHTML = Array9[5];
    ScoreTime();
    document.getElementById('cellE166').disabled = true;
  }
}
function Alerting167()
{
  document.getElementById('cellE167').value = Array9[6];
  if(Array9[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE167').style.backgroundColor = "green";
    document.getElementById('cellE167').innerHTML = Array9[6];
    ScoreTime();
    document.getElementById('cellE167').disabled = true;
  }
}
function Alerting168()
{
  document.getElementById('cellE168').value = Array9[7];
  if(Array9[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE168').style.backgroundColor = "green";
    document.getElementById('cellE168').innerHTML = Array9[7];
    ScoreTime();
    document.getElementById('cellE168').disabled = true;
  }
}
function Alerting169()
{
  document.getElementById('cellE169').value = Array9[8];
  if(Array9[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE169').style.backgroundColor = "green";
    document.getElementById('cellE169').innerHTML = Array9[8];
    ScoreTime();
    document.getElementById('cellE169').disabled = true;
  }
}
function Alerting170()
{
  document.getElementById('cellE170').value = Array9[9];
  if(Array9[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE170').style.backgroundColor = "green";
    document.getElementById('cellE170').innerHTML = Array9[9];
    ScoreTime();
    document.getElementById('cellE170').disabled = true;
  }
}
function Alerting171()
{
  document.getElementById('cellE171').value = Array9[10];
  if(Array9[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE171').style.backgroundColor = "green";
    document.getElementById('cellE171').innerHTML = Array9[10];
    ScoreTime();
    document.getElementById('cellE171').disabled = true;
  }
}
function Alerting172()
{
  document.getElementById('cellE172').value = Array9[11];
  if(Array9[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE172').style.backgroundColor = "green";
    document.getElementById('cellE172').innerHTML = Array9[11];
    ScoreTime();
    document.getElementById('cellE172').disabled = true;
  }
}
function Alerting173()
{
  document.getElementById('cellE173').value = Array9[12];
  if(Array9[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE173').style.backgroundColor = "green";
    document.getElementById('cellE173').innerHTML = Array9[12];
    ScoreTime();
    document.getElementById('cellE173').disabled = true;
  }
}
function Alerting174()
{
  document.getElementById('cellE174').value = Array9[13];
  if(Array9[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE174').style.backgroundColor = "green";
    document.getElementById('cellE174').innerHTML = Array9[13];
    ScoreTime();
    document.getElementById('cellE174').disabled = true;
  }
}
function Alerting175()
{
  document.getElementById('cellE175').value = Array9[14];
  if(Array9[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE175').style.backgroundColor = "green";
    document.getElementById('cellE175').innerHTML = Array9[14];
    ScoreTime();
    document.getElementById('cellE175').disabled = true;
  }
}
function Alerting176()
{
  document.getElementById('cellE176').value = Array9[15];
  if(Array9[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE176').style.backgroundColor = "green";
    document.getElementById('cellE176').innerHTML = Array9[15];
    ScoreTime();
    document.getElementById('cellE176').disabled = true;
  }
}
function Alerting177()
{
  document.getElementById('cellE177').value = Array9[16];
  if(Array9[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE177').style.backgroundColor = "green";
    document.getElementById('cellE177').innerHTML = Array9[16];
    ScoreTime();
    document.getElementById('cellE177').disabled = true;
  }
}
function Alerting178()
{
  document.getElementById('cellE178').value = Array9[17];
  if(Array9[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE178').style.backgroundColor = "green";
    document.getElementById('cellE178').innerHTML = Array9[17];
    ScoreTime();
    document.getElementById('cellE178').disabled = true;
  }
}
function Alerting179()
{
  document.getElementById('cellE179').value = Array9[18];
  if(Array9[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE179').style.backgroundColor = "green";
    document.getElementById('cellE179').innerHTML = Array9[18];
    ScoreTime();
    document.getElementById('cellE179').disabled = true;
  }
}
function Alerting180()
{
  document.getElementById('cellE180').value = Array9[19];
  if(Array9[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE180').style.backgroundColor = "green";
    document.getElementById('cellE180').innerHTML = Array9[19];
    ScoreTime();
    document.getElementById('cellE180').disabled = true;
  }
}
//Break
//Break
//Break
//Break
//Break
function Alerting181()
{
  document.getElementById('cellE181').value = Array10[0];
  if(Array10[0]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE181').style.backgroundColor = "green";
    document.getElementById('cellE181').innerHTML = Array10[0];
    ScoreTime();
    document.getElementById('cellE181').disabled = true;
  }
}
function Alerting182()
{
  document.getElementById('cellE182').value = Array10[1];
  if(Array10[1]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE182').style.backgroundColor = "green";
    document.getElementById('cellE182').innerHTML = Array10[1];
    ScoreTime();
    document.getElementById('cellE182').disabled = true;
  }
}
function Alerting183()
{
  document.getElementById('cellE183').value = Array10[2];
  if(Array10[2]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE183').style.backgroundColor = "green";
    document.getElementById('cellE183').innerHTML = Array10[2];
    ScoreTime();
    document.getElementById('cellE183').disabled = true;
  }
}
function Alerting184()
{
  document.getElementById('cellE184').value = Array10[3];
  if(Array10[3]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE184').style.backgroundColor = "green";
    document.getElementById('cellE184').innerHTML = Array10[3];
    ScoreTime();
    document.getElementById('cellE184').disabled = true;
  }
}
function Alerting185()
{
  document.getElementById('cellE185').value = Array10[4];
  if(Array10[4]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE185').style.backgroundColor = "green";
    document.getElementById('cellE185').innerHTML = Array10[4];
    ScoreTime();
    document.getElementById('cellE185').disabled = true;
  }
}
function Alerting186()
{
  document.getElementById('cellE186').value = Array10[5];
  if(Array10[5]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE186').style.backgroundColor = "green";
    document.getElementById('cellE186').innerHTML = Array10[5];
    ScoreTime();
    document.getElementById('cellE186').disabled = true;
  }
}
function Alerting187()
{
  document.getElementById('cellE187').value = Array10[6];
  if(Array10[6]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE187').style.backgroundColor = "green";
    document.getElementById('cellE187').innerHTML = Array10[6];
    ScoreTime();
    document.getElementById('cellE187').disabled = true;
  }
}
function Alerting188()
{
  document.getElementById('cellE188').value = Array10[7];
  if(Array10[7]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE188').style.backgroundColor = "green";
    document.getElementById('cellE188').innerHTML = Array10[7];
    ScoreTime();
    document.getElementById('cellE188').disabled = true;
  }
}
function Alerting189()
{
  document.getElementById('cellE189').value = Array10[8];
  if(Array10[8]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE189').style.backgroundColor = "green";
    document.getElementById('cellE189').innerHTML = Array10[8];
    ScoreTime();
    document.getElementById('cellE189').disabled = true;
  }
}
function Alerting190()
{
  document.getElementById('cellE190').value = Array10[9];
  if(Array10[9]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE190').style.backgroundColor = "green";
    document.getElementById('cellE190').innerHTML = Array10[9];
    ScoreTime();
    document.getElementById('cellE190').disabled = true;
  }
}
function Alerting191()
{
  document.getElementById('cellE191').value = Array10[10];
  if(Array10[10]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE191').style.backgroundColor = "green";
    document.getElementById('cellE191').innerHTML = Array10[10];
    ScoreTime();
    document.getElementById('cellE191').disabled = true;
  }
}
function Alerting192()
{
  document.getElementById('cellE192').value = Array10[11];
  if(Array10[11]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE192').style.backgroundColor = "green";
    document.getElementById('cellE192').innerHTML = Array10[11];
    ScoreTime();
    document.getElementById('cellE192').disabled = true;
  }
}
function Alerting193()
{
  document.getElementById('cellE193').value = Array10[12];
  if(Array10[12]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE193').style.backgroundColor = "green";
    document.getElementById('cellE193').innerHTML = Array10[12];
    ScoreTime();
    document.getElementById('cellE193').disabled = true;
  }
}
function Alerting194()
{
  document.getElementById('cellE194').value = Array10[13];
  if(Array10[13]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE194').style.backgroundColor = "green";
    document.getElementById('cellE194').innerHTML = Array10[13];
    ScoreTime();
    document.getElementById('cellE194').disabled = true;
  }
}
function Alerting195()
{
  document.getElementById('cellE195').value = Array10[14];
  if(Array10[14]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE195').style.backgroundColor = "green";
    document.getElementById('cellE195').innerHTML = Array10[14];
    ScoreTime();
    document.getElementById('cellE195').disabled = true;
  }
}
function Alerting196()
{
  document.getElementById('cellE196').value = Array10[15];
  if(Array10[15]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE196').style.backgroundColor = "green";
    document.getElementById('cellE196').innerHTML = Array10[15];
    ScoreTime();
    document.getElementById('cellE196').disabled = true;
  }
}
function Alerting197()
{
  document.getElementById('cellE197').value = Array10[16];
  if(Array10[16]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE197').style.backgroundColor = "green";
    document.getElementById('cellE197').innerHTML = Array10[16];
    ScoreTime();
    document.getElementById('cellE197').disabled = true;
  }
}
function Alerting198()
{
  document.getElementById('cellE198').value = Array10[17];
  if(Array10[17]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE198').style.backgroundColor = "green";
    document.getElementById('cellE198').innerHTML = Array10[17];
    ScoreTime();
    document.getElementById('cellE198').disabled = true;
  }
}
function Alerting199()
{
  document.getElementById('cellE199').value = Array10[18];
  if(Array10[18]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE199').style.backgroundColor = "green";
    document.getElementById('cellE199').innerHTML = Array10[18];
    ScoreTime();
    document.getElementById('cellE199').disabled = true;
  }
}
function Alerting200()
{
  document.getElementById('cellE200').value = Array10[19];
  if(Array10[19]=="bomb"){GameoverLose();}
  else
  {
    document.getElementById('cellE200').style.backgroundColor = "green";
    document.getElementById('cellE200').innerHTML = Array10[19];
    ScoreTime();
    document.getElementById('cellE200').disabled = true;
  }
}

function ResetTime()
{
  document.getElementById('cellE1').disabled = true;
  document.getElementById('cellE2').disabled = true;
  document.getElementById('cellE3').disabled = true;
  document.getElementById('cellE4').disabled = true;
  document.getElementById('cellE5').disabled = true;
  document.getElementById('cellE6').disabled = true;
  document.getElementById('cellE7').disabled = true;
  document.getElementById('cellE8').disabled = true;
  document.getElementById('cellE9').disabled = true;
  document.getElementById('cellE10').disabled = true;
  document.getElementById('cellE11').disabled = true;
  document.getElementById('cellE12').disabled = true;
  document.getElementById('cellE13').disabled = true;
  document.getElementById('cellE14').disabled = true;
  document.getElementById('cellE15').disabled = true;
  document.getElementById('cellE16').disabled = true;
  document.getElementById('cellE17').disabled = true;
  document.getElementById('cellE18').disabled = true;
  document.getElementById('cellE19').disabled = true;
  document.getElementById('cellE20').disabled = true;
  document.getElementById('cellE21').disabled = true;
  document.getElementById('cellE22').disabled = true;
  document.getElementById('cellE23').disabled = true;
  document.getElementById('cellE24').disabled = true;
  document.getElementById('cellE25').disabled = true;
  document.getElementById('cellE26').disabled = true;
  document.getElementById('cellE27').disabled = true;
  document.getElementById('cellE28').disabled = true;
  document.getElementById('cellE29').disabled = true;
  document.getElementById('cellE30').disabled = true;
  document.getElementById('cellE31').disabled = true;
  document.getElementById('cellE32').disabled = true;
  document.getElementById('cellE33').disabled = true;
  document.getElementById('cellE34').disabled = true;
  document.getElementById('cellE35').disabled = true;
  document.getElementById('cellE36').disabled = true;
  document.getElementById('cellE37').disabled = true;
  document.getElementById('cellE38').disabled = true;
  document.getElementById('cellE39').disabled = true;
  document.getElementById('cellE40').disabled = true;
  document.getElementById('cellE41').disabled = true;
  document.getElementById('cellE42').disabled = true;
  document.getElementById('cellE43').disabled = true;
  document.getElementById('cellE44').disabled = true;
  document.getElementById('cellE45').disabled = true;
  document.getElementById('cellE46').disabled = true;
  document.getElementById('cellE47').disabled = true;
  document.getElementById('cellE48').disabled = true;
  document.getElementById('cellE49').disabled = true;
  document.getElementById('cellE50').disabled = true;
  document.getElementById('cellE51').disabled = true;
  document.getElementById('cellE52').disabled = true;
  document.getElementById('cellE53').disabled = true;
  document.getElementById('cellE54').disabled = true;
  document.getElementById('cellE55').disabled = true;
  document.getElementById('cellE56').disabled = true;
  document.getElementById('cellE57').disabled = true;
  document.getElementById('cellE58').disabled = true;
  document.getElementById('cellE59').disabled = true;
  document.getElementById('cellE60').disabled = true;
  document.getElementById('cellE61').disabled = true;
  document.getElementById('cellE62').disabled = true;
  document.getElementById('cellE63').disabled = true;
  document.getElementById('cellE64').disabled = true;
  document.getElementById('cellE65').disabled = true;
  document.getElementById('cellE66').disabled = true;
  document.getElementById('cellE67').disabled = true;
  document.getElementById('cellE68').disabled = true;
  document.getElementById('cellE69').disabled = true;
  document.getElementById('cellE70').disabled = true;
  document.getElementById('cellE71').disabled = true;
  document.getElementById('cellE72').disabled = true;
  document.getElementById('cellE73').disabled = true;
  document.getElementById('cellE74').disabled = true;
  document.getElementById('cellE75').disabled = true;
  document.getElementById('cellE76').disabled = true;
  document.getElementById('cellE77').disabled = true;
  document.getElementById('cellE78').disabled = true;
  document.getElementById('cellE79').disabled = true;
  document.getElementById('cellE80').disabled = true;
  document.getElementById('cellE81').disabled = true;
  document.getElementById('cellE82').disabled = true;
  document.getElementById('cellE83').disabled = true;
  document.getElementById('cellE84').disabled = true;
  document.getElementById('cellE85').disabled = true;
  document.getElementById('cellE86').disabled = true;
  document.getElementById('cellE87').disabled = true;
  document.getElementById('cellE88').disabled = true;
  document.getElementById('cellE89').disabled = true;
  document.getElementById('cellE90').disabled = true;
  document.getElementById('cellE91').disabled = true;
  document.getElementById('cellE92').disabled = true;
  document.getElementById('cellE93').disabled = true;
  document.getElementById('cellE94').disabled = true;
  document.getElementById('cellE95').disabled = true;
  document.getElementById('cellE96').disabled = true;
  document.getElementById('cellE97').disabled = true;
  document.getElementById('cellE98').disabled = true;
  document.getElementById('cellE99').disabled = true;
  document.getElementById('cellE100').disabled = true;
  document.getElementById('cellE101').disabled = true;
  document.getElementById('cellE102').disabled = true;
  document.getElementById('cellE103').disabled = true;
  document.getElementById('cellE104').disabled = true;
  document.getElementById('cellE105').disabled = true;
  document.getElementById('cellE106').disabled = true;
  document.getElementById('cellE107').disabled = true;
  document.getElementById('cellE108').disabled = true;
  document.getElementById('cellE109').disabled = true;
  document.getElementById('cellE110').disabled = true;
  document.getElementById('cellE111').disabled = true;
  document.getElementById('cellE112').disabled = true;
  document.getElementById('cellE113').disabled = true;
  document.getElementById('cellE114').disabled = true;
  document.getElementById('cellE115').disabled = true;
  document.getElementById('cellE116').disabled = true;
  document.getElementById('cellE117').disabled = true;
  document.getElementById('cellE118').disabled = true;
  document.getElementById('cellE119').disabled = true;
  document.getElementById('cellE120').disabled = true;
  document.getElementById('cellE121').disabled = true;
  document.getElementById('cellE122').disabled = true;
  document.getElementById('cellE123').disabled = true;
  document.getElementById('cellE124').disabled = true;
  document.getElementById('cellE125').disabled = true;
  document.getElementById('cellE126').disabled = true;
  document.getElementById('cellE127').disabled = true;
  document.getElementById('cellE128').disabled = true;
  document.getElementById('cellE129').disabled = true;
  document.getElementById('cellE130').disabled = true;
  document.getElementById('cellE131').disabled = true;
  document.getElementById('cellE132').disabled = true;
  document.getElementById('cellE133').disabled = true;
  document.getElementById('cellE134').disabled = true;
  document.getElementById('cellE135').disabled = true;
  document.getElementById('cellE136').disabled = true;
  document.getElementById('cellE137').disabled = true;
  document.getElementById('cellE138').disabled = true;
  document.getElementById('cellE139').disabled = true;
  document.getElementById('cellE140').disabled = true;
  document.getElementById('cellE141').disabled = true;
  document.getElementById('cellE142').disabled = true;
  document.getElementById('cellE143').disabled = true;
  document.getElementById('cellE144').disabled = true;
  document.getElementById('cellE145').disabled = true;
  document.getElementById('cellE146').disabled = true;
  document.getElementById('cellE147').disabled = true;
  document.getElementById('cellE148').disabled = true;
  document.getElementById('cellE149').disabled = true;
  document.getElementById('cellE150').disabled = true;
  document.getElementById('cellE151').disabled = true;
  document.getElementById('cellE152').disabled = true;
  document.getElementById('cellE153').disabled = true;
  document.getElementById('cellE154').disabled = true;
  document.getElementById('cellE155').disabled = true;
  document.getElementById('cellE156').disabled = true;
  document.getElementById('cellE157').disabled = true;
  document.getElementById('cellE158').disabled = true;
  document.getElementById('cellE159').disabled = true;
  document.getElementById('cellE160').disabled = true;
  document.getElementById('cellE161').disabled = true;
  document.getElementById('cellE162').disabled = true;
  document.getElementById('cellE163').disabled = true;
  document.getElementById('cellE164').disabled = true;
  document.getElementById('cellE165').disabled = true;
  document.getElementById('cellE166').disabled = true;
  document.getElementById('cellE167').disabled = true;
  document.getElementById('cellE168').disabled = true;
  document.getElementById('cellE169').disabled = true;
  document.getElementById('cellE170').disabled = true;
  document.getElementById('cellE171').disabled = true;
  document.getElementById('cellE172').disabled = true;
  document.getElementById('cellE173').disabled = true;
  document.getElementById('cellE174').disabled = true;
  document.getElementById('cellE175').disabled = true;
  document.getElementById('cellE176').disabled = true;
  document.getElementById('cellE177').disabled = true;
  document.getElementById('cellE178').disabled = true;
  document.getElementById('cellE179').disabled = true;
  document.getElementById('cellE180').disabled = true;
  document.getElementById('cellE181').disabled = true;
  document.getElementById('cellE182').disabled = true;
  document.getElementById('cellE183').disabled = true;
  document.getElementById('cellE184').disabled = true;
  document.getElementById('cellE185').disabled = true;
  document.getElementById('cellE186').disabled = true;
  document.getElementById('cellE187').disabled = true;
  document.getElementById('cellE188').disabled = true;
  document.getElementById('cellE189').disabled = true;
  document.getElementById('cellE190').disabled = true;
  document.getElementById('cellE191').disabled = true;
  document.getElementById('cellE192').disabled = true;
  document.getElementById('cellE193').disabled = true;
  document.getElementById('cellE194').disabled = true;
  document.getElementById('cellE195').disabled = true;
  document.getElementById('cellE196').disabled = true;
  document.getElementById('cellE197').disabled = true;
  document.getElementById('cellE198').disabled = true;
  document.getElementById('cellE199').disabled = true;
  document.getElementById('cellE200').disabled = true;
  if(Array1[0]=="bomb"){document.getElementById('cellE1').style.backgroundColor = "darkred" }
  if(Array1[1]=="bomb"){document.getElementById('cellE2').style.backgroundColor = "darkred" }
  if(Array1[2]=="bomb"){document.getElementById('cellE3').style.backgroundColor = "darkred" }
  if(Array1[3]=="bomb"){document.getElementById('cellE4').style.backgroundColor = "darkred" }
  if(Array1[4]=="bomb"){document.getElementById('cellE5').style.backgroundColor = "darkred" }
  if(Array1[5]=="bomb"){document.getElementById('cellE6').style.backgroundColor = "darkred" }
  if(Array1[6]=="bomb"){document.getElementById('cellE7').style.backgroundColor = "darkred" }
  if(Array1[7]=="bomb"){document.getElementById('cellE8').style.backgroundColor = "darkred" }
  if(Array1[8]=="bomb"){document.getElementById('cellE9').style.backgroundColor = "darkred" }
  if(Array1[9]=="bomb"){document.getElementById('cellE10').style.backgroundColor = "darkred" }
  if(Array1[10]=="bomb"){document.getElementById('cellE11').style.backgroundColor = "darkred" }
  if(Array1[11]=="bomb"){document.getElementById('cellE12').style.backgroundColor = "darkred" }
  if(Array1[12]=="bomb"){document.getElementById('cellE13').style.backgroundColor = "darkred" }
  if(Array1[13]=="bomb"){document.getElementById('cellE14').style.backgroundColor = "darkred" }
  if(Array1[14]=="bomb"){document.getElementById('cellE15').style.backgroundColor = "darkred" }
  if(Array1[15]=="bomb"){document.getElementById('cellE16').style.backgroundColor = "darkred" }
  if(Array1[16]=="bomb"){document.getElementById('cellE17').style.backgroundColor = "darkred" }
  if(Array1[17]=="bomb"){document.getElementById('cellE18').style.backgroundColor = "darkred" }
  if(Array1[18]=="bomb"){document.getElementById('cellE19').style.backgroundColor = "darkred" }
  if(Array1[19]=="bomb"){document.getElementById('cellE20').style.backgroundColor = "darkred" }
  //Break
  if(Array2[0]=="bomb"){document.getElementById('cellE21').style.backgroundColor = "darkred" }
  if(Array2[1]=="bomb"){document.getElementById('cellE22').style.backgroundColor = "darkred" }
  if(Array2[2]=="bomb"){document.getElementById('cellE23').style.backgroundColor = "darkred" }
  if(Array2[3]=="bomb"){document.getElementById('cellE24').style.backgroundColor = "darkred" }
  if(Array2[4]=="bomb"){document.getElementById('cellE25').style.backgroundColor = "darkred" }
  if(Array2[5]=="bomb"){document.getElementById('cellE26').style.backgroundColor = "darkred" }
  if(Array2[6]=="bomb"){document.getElementById('cellE27').style.backgroundColor = "darkred" }
  if(Array2[7]=="bomb"){document.getElementById('cellE28').style.backgroundColor = "darkred" }
  if(Array2[8]=="bomb"){document.getElementById('cellE29').style.backgroundColor = "darkred" }
  if(Array2[9]=="bomb"){document.getElementById('cellE30').style.backgroundColor = "darkred" }
  if(Array2[10]=="bomb"){document.getElementById('cellE31').style.backgroundColor = "darkred" }
  if(Array2[11]=="bomb"){document.getElementById('cellE32').style.backgroundColor = "darkred" }
  if(Array2[12]=="bomb"){document.getElementById('cellE33').style.backgroundColor = "darkred" }
  if(Array2[13]=="bomb"){document.getElementById('cellE34').style.backgroundColor = "darkred" }
  if(Array2[14]=="bomb"){document.getElementById('cellE35').style.backgroundColor = "darkred" }
  if(Array2[15]=="bomb"){document.getElementById('cellE36').style.backgroundColor = "darkred" }
  if(Array2[16]=="bomb"){document.getElementById('cellE37').style.backgroundColor = "darkred" }
  if(Array2[17]=="bomb"){document.getElementById('cellE38').style.backgroundColor = "darkred" }
  if(Array2[18]=="bomb"){document.getElementById('cellE39').style.backgroundColor = "darkred" }
  if(Array2[19]=="bomb"){document.getElementById('cellE40').style.backgroundColor = "darkred" }
  //Break
  if(Array3[0]=="bomb"){document.getElementById('cellE41').style.backgroundColor = "darkred" }
  if(Array3[1]=="bomb"){document.getElementById('cellE42').style.backgroundColor = "darkred" }
  if(Array3[2]=="bomb"){document.getElementById('cellE43').style.backgroundColor = "darkred" }
  if(Array3[3]=="bomb"){document.getElementById('cellE44').style.backgroundColor = "darkred" }
  if(Array3[4]=="bomb"){document.getElementById('cellE45').style.backgroundColor = "darkred" }
  if(Array3[5]=="bomb"){document.getElementById('cellE46').style.backgroundColor = "darkred" }
  if(Array3[6]=="bomb"){document.getElementById('cellE47').style.backgroundColor = "darkred" }
  if(Array3[7]=="bomb"){document.getElementById('cellE48').style.backgroundColor = "darkred" }
  if(Array3[8]=="bomb"){document.getElementById('cellE49').style.backgroundColor = "darkred" }
  if(Array3[9]=="bomb"){document.getElementById('cellE50').style.backgroundColor = "darkred" }
  if(Array3[10]=="bomb"){document.getElementById('cellE51').style.backgroundColor = "darkred" }
  if(Array3[11]=="bomb"){document.getElementById('cellE52').style.backgroundColor = "darkred" }
  if(Array3[12]=="bomb"){document.getElementById('cellE53').style.backgroundColor = "darkred" }
  if(Array3[13]=="bomb"){document.getElementById('cellE54').style.backgroundColor = "darkred" }
  if(Array3[14]=="bomb"){document.getElementById('cellE55').style.backgroundColor = "darkred" }
  if(Array3[15]=="bomb"){document.getElementById('cellE56').style.backgroundColor = "darkred" }
  if(Array3[16]=="bomb"){document.getElementById('cellE57').style.backgroundColor = "darkred" }
  if(Array3[17]=="bomb"){document.getElementById('cellE58').style.backgroundColor = "darkred" }
  if(Array3[18]=="bomb"){document.getElementById('cellE59').style.backgroundColor = "darkred" }
  if(Array3[19]=="bomb"){document.getElementById('cellE60').style.backgroundColor = "darkred" }
  //Break
  if(Array4[0]=="bomb"){document.getElementById('cellE61').style.backgroundColor = "darkred" }
  if(Array4[1]=="bomb"){document.getElementById('cellE62').style.backgroundColor = "darkred" }
  if(Array4[2]=="bomb"){document.getElementById('cellE63').style.backgroundColor = "darkred" }
  if(Array4[3]=="bomb"){document.getElementById('cellE64').style.backgroundColor = "darkred" }
  if(Array4[4]=="bomb"){document.getElementById('cellE65').style.backgroundColor = "darkred" }
  if(Array4[5]=="bomb"){document.getElementById('cellE66').style.backgroundColor = "darkred" }
  if(Array4[6]=="bomb"){document.getElementById('cellE67').style.backgroundColor = "darkred" }
  if(Array4[7]=="bomb"){document.getElementById('cellE68').style.backgroundColor = "darkred" }
  if(Array4[8]=="bomb"){document.getElementById('cellE69').style.backgroundColor = "darkred" }
  if(Array4[9]=="bomb"){document.getElementById('cellE70').style.backgroundColor = "darkred" }
  if(Array4[10]=="bomb"){document.getElementById('cellE71').style.backgroundColor = "darkred" }
  if(Array4[11]=="bomb"){document.getElementById('cellE72').style.backgroundColor = "darkred" }
  if(Array4[12]=="bomb"){document.getElementById('cellE73').style.backgroundColor = "darkred" }
  if(Array4[13]=="bomb"){document.getElementById('cellE74').style.backgroundColor = "darkred" }
  if(Array4[14]=="bomb"){document.getElementById('cellE75').style.backgroundColor = "darkred" }
  if(Array4[15]=="bomb"){document.getElementById('cellE76').style.backgroundColor = "darkred" }
  if(Array4[16]=="bomb"){document.getElementById('cellE77').style.backgroundColor = "darkred" }
  if(Array4[17]=="bomb"){document.getElementById('cellE78').style.backgroundColor = "darkred" }
  if(Array4[18]=="bomb"){document.getElementById('cellE79').style.backgroundColor = "darkred" }
  if(Array4[19]=="bomb"){document.getElementById('cellE80').style.backgroundColor = "darkred" }
  //Break
  if(Array5[0]=="bomb"){document.getElementById('cellE81').style.backgroundColor = "darkred" }
  if(Array5[1]=="bomb"){document.getElementById('cellE82').style.backgroundColor = "darkred" }
  if(Array5[2]=="bomb"){document.getElementById('cellE83').style.backgroundColor = "darkred" }
  if(Array5[3]=="bomb"){document.getElementById('cellE84').style.backgroundColor = "darkred" }
  if(Array5[4]=="bomb"){document.getElementById('cellE85').style.backgroundColor = "darkred" }
  if(Array5[5]=="bomb"){document.getElementById('cellE86').style.backgroundColor = "darkred" }
  if(Array5[6]=="bomb"){document.getElementById('cellE87').style.backgroundColor = "darkred" }
  if(Array5[7]=="bomb"){document.getElementById('cellE88').style.backgroundColor = "darkred" }
  if(Array5[8]=="bomb"){document.getElementById('cellE89').style.backgroundColor = "darkred" }
  if(Array5[9]=="bomb"){document.getElementById('cellE90').style.backgroundColor = "darkred" }
  if(Array5[10]=="bomb"){document.getElementById('cellE91').style.backgroundColor = "darkred" }
  if(Array5[11]=="bomb"){document.getElementById('cellE92').style.backgroundColor = "darkred" }
  if(Array5[12]=="bomb"){document.getElementById('cellE93').style.backgroundColor = "darkred" }
  if(Array5[13]=="bomb"){document.getElementById('cellE94').style.backgroundColor = "darkred" }
  if(Array5[14]=="bomb"){document.getElementById('cellE95').style.backgroundColor = "darkred" }
  if(Array5[15]=="bomb"){document.getElementById('cellE96').style.backgroundColor = "darkred" }
  if(Array5[16]=="bomb"){document.getElementById('cellE97').style.backgroundColor = "darkred" }
  if(Array5[17]=="bomb"){document.getElementById('cellE98').style.backgroundColor = "darkred" }
  if(Array5[18]=="bomb"){document.getElementById('cellE99').style.backgroundColor = "darkred" }
  if(Array5[19]=="bomb"){document.getElementById('cellE100').style.backgroundColor = "darkred" }
  //Break
  if(Array6[0]=="bomb"){document.getElementById('cellE101').style.backgroundColor = "darkred" }
  if(Array6[1]=="bomb"){document.getElementById('cellE102').style.backgroundColor = "darkred" }
  if(Array6[2]=="bomb"){document.getElementById('cellE103').style.backgroundColor = "darkred" }
  if(Array6[3]=="bomb"){document.getElementById('cellE104').style.backgroundColor = "darkred" }
  if(Array6[4]=="bomb"){document.getElementById('cellE105').style.backgroundColor = "darkred" }
  if(Array6[5]=="bomb"){document.getElementById('cellE106').style.backgroundColor = "darkred" }
  if(Array6[6]=="bomb"){document.getElementById('cellE107').style.backgroundColor = "darkred" }
  if(Array6[7]=="bomb"){document.getElementById('cellE108').style.backgroundColor = "darkred" }
  if(Array6[8]=="bomb"){document.getElementById('cellE109').style.backgroundColor = "darkred" }
  if(Array6[9]=="bomb"){document.getElementById('cellE110').style.backgroundColor = "darkred" }
  if(Array6[10]=="bomb"){document.getElementById('cellE111').style.backgroundColor = "darkred" }
  if(Array6[11]=="bomb"){document.getElementById('cellE112').style.backgroundColor = "darkred" }
  if(Array6[12]=="bomb"){document.getElementById('cellE113').style.backgroundColor = "darkred" }
  if(Array6[13]=="bomb"){document.getElementById('cellE114').style.backgroundColor = "darkred" }
  if(Array6[14]=="bomb"){document.getElementById('cellE115').style.backgroundColor = "darkred" }
  if(Array6[15]=="bomb"){document.getElementById('cellE116').style.backgroundColor = "darkred" }
  if(Array6[16]=="bomb"){document.getElementById('cellE117').style.backgroundColor = "darkred" }
  if(Array6[17]=="bomb"){document.getElementById('cellE118').style.backgroundColor = "darkred" }
  if(Array6[18]=="bomb"){document.getElementById('cellE119').style.backgroundColor = "darkred" }
  if(Array6[19]=="bomb"){document.getElementById('cellE120').style.backgroundColor = "darkred" }
  //Break
  if(Array7[0]=="bomb"){document.getElementById('cellE121').style.backgroundColor = "darkred" }
  if(Array7[1]=="bomb"){document.getElementById('cellE122').style.backgroundColor = "darkred" }
  if(Array7[2]=="bomb"){document.getElementById('cellE123').style.backgroundColor = "darkred" }
  if(Array7[3]=="bomb"){document.getElementById('cellE124').style.backgroundColor = "darkred" }
  if(Array7[4]=="bomb"){document.getElementById('cellE125').style.backgroundColor = "darkred" }
  if(Array7[5]=="bomb"){document.getElementById('cellE126').style.backgroundColor = "darkred" }
  if(Array7[6]=="bomb"){document.getElementById('cellE127').style.backgroundColor = "darkred" }
  if(Array7[7]=="bomb"){document.getElementById('cellE128').style.backgroundColor = "darkred" }
  if(Array7[8]=="bomb"){document.getElementById('cellE129').style.backgroundColor = "darkred" }
  if(Array7[9]=="bomb"){document.getElementById('cellE130').style.backgroundColor = "darkred" }
  if(Array7[10]=="bomb"){document.getElementById('cellE131').style.backgroundColor = "darkred" }
  if(Array7[11]=="bomb"){document.getElementById('cellE132').style.backgroundColor = "darkred" }
  if(Array7[12]=="bomb"){document.getElementById('cellE133').style.backgroundColor = "darkred" }
  if(Array7[13]=="bomb"){document.getElementById('cellE134').style.backgroundColor = "darkred" }
  if(Array7[14]=="bomb"){document.getElementById('cellE135').style.backgroundColor = "darkred" }
  if(Array7[15]=="bomb"){document.getElementById('cellE136').style.backgroundColor = "darkred" }
  if(Array7[16]=="bomb"){document.getElementById('cellE137').style.backgroundColor = "darkred" }
  if(Array7[17]=="bomb"){document.getElementById('cellE138').style.backgroundColor = "darkred" }
  if(Array7[18]=="bomb"){document.getElementById('cellE139').style.backgroundColor = "darkred" }
  if(Array7[19]=="bomb"){document.getElementById('cellE140').style.backgroundColor = "darkred" }
  //Break
  if(Array8[0]=="bomb"){document.getElementById('cellE141').style.backgroundColor = "darkred" }
  if(Array8[1]=="bomb"){document.getElementById('cellE142').style.backgroundColor = "darkred" }
  if(Array8[2]=="bomb"){document.getElementById('cellE143').style.backgroundColor = "darkred" }
  if(Array8[3]=="bomb"){document.getElementById('cellE144').style.backgroundColor = "darkred" }
  if(Array8[4]=="bomb"){document.getElementById('cellE145').style.backgroundColor = "darkred" }
  if(Array8[5]=="bomb"){document.getElementById('cellE146').style.backgroundColor = "darkred" }
  if(Array8[6]=="bomb"){document.getElementById('cellE147').style.backgroundColor = "darkred" }
  if(Array8[7]=="bomb"){document.getElementById('cellE148').style.backgroundColor = "darkred" }
  if(Array8[8]=="bomb"){document.getElementById('cellE149').style.backgroundColor = "darkred" }
  if(Array8[9]=="bomb"){document.getElementById('cellE150').style.backgroundColor = "darkred" }
  if(Array8[10]=="bomb"){document.getElementById('cellE151').style.backgroundColor = "darkred" }
  if(Array8[11]=="bomb"){document.getElementById('cellE152').style.backgroundColor = "darkred" }
  if(Array8[12]=="bomb"){document.getElementById('cellE153').style.backgroundColor = "darkred" }
  if(Array8[13]=="bomb"){document.getElementById('cellE154').style.backgroundColor = "darkred" }
  if(Array8[14]=="bomb"){document.getElementById('cellE155').style.backgroundColor = "darkred" }
  if(Array8[15]=="bomb"){document.getElementById('cellE156').style.backgroundColor = "darkred" }
  if(Array8[16]=="bomb"){document.getElementById('cellE157').style.backgroundColor = "darkred" }
  if(Array8[17]=="bomb"){document.getElementById('cellE158').style.backgroundColor = "darkred" }
  if(Array8[18]=="bomb"){document.getElementById('cellE159').style.backgroundColor = "darkred" }
  if(Array8[19]=="bomb"){document.getElementById('cellE160').style.backgroundColor = "darkred" }
  //Break
  if(Array9[0]=="bomb"){document.getElementById('cellE161').style.backgroundColor = "darkred" }
  if(Array9[1]=="bomb"){document.getElementById('cellE162').style.backgroundColor = "darkred" }
  if(Array9[2]=="bomb"){document.getElementById('cellE163').style.backgroundColor = "darkred" }
  if(Array9[3]=="bomb"){document.getElementById('cellE164').style.backgroundColor = "darkred" }
  if(Array9[4]=="bomb"){document.getElementById('cellE165').style.backgroundColor = "darkred" }
  if(Array9[5]=="bomb"){document.getElementById('cellE166').style.backgroundColor = "darkred" }
  if(Array9[6]=="bomb"){document.getElementById('cellE167').style.backgroundColor = "darkred" }
  if(Array9[7]=="bomb"){document.getElementById('cellE168').style.backgroundColor = "darkred" }
  if(Array9[8]=="bomb"){document.getElementById('cellE169').style.backgroundColor = "darkred" }
  if(Array9[9]=="bomb"){document.getElementById('cellE170').style.backgroundColor = "darkred" }
  if(Array9[10]=="bomb"){document.getElementById('cellE171').style.backgroundColor = "darkred" }
  if(Array9[11]=="bomb"){document.getElementById('cellE172').style.backgroundColor = "darkred" }
  if(Array9[12]=="bomb"){document.getElementById('cellE173').style.backgroundColor = "darkred" }
  if(Array9[13]=="bomb"){document.getElementById('cellE174').style.backgroundColor = "darkred" }
  if(Array9[14]=="bomb"){document.getElementById('cellE175').style.backgroundColor = "darkred" }
  if(Array9[15]=="bomb"){document.getElementById('cellE176').style.backgroundColor = "darkred" }
  if(Array9[16]=="bomb"){document.getElementById('cellE177').style.backgroundColor = "darkred" }
  if(Array9[17]=="bomb"){document.getElementById('cellE178').style.backgroundColor = "darkred" }
  if(Array9[18]=="bomb"){document.getElementById('cellE179').style.backgroundColor = "darkred" }
  if(Array9[19]=="bomb"){document.getElementById('cellE180').style.backgroundColor = "darkred" }
  //Break
  if(Array10[0]=="bomb"){document.getElementById('cellE181').style.backgroundColor = "darkred" }
  if(Array10[1]=="bomb"){document.getElementById('cellE182').style.backgroundColor = "darkred" }
  if(Array10[2]=="bomb"){document.getElementById('cellE183').style.backgroundColor = "darkred" }
  if(Array10[3]=="bomb"){document.getElementById('cellE184').style.backgroundColor = "darkred" }
  if(Array10[4]=="bomb"){document.getElementById('cellE185').style.backgroundColor = "darkred" }
  if(Array10[5]=="bomb"){document.getElementById('cellE186').style.backgroundColor = "darkred" }
  if(Array10[6]=="bomb"){document.getElementById('cellE187').style.backgroundColor = "darkred" }
  if(Array10[7]=="bomb"){document.getElementById('cellE188').style.backgroundColor = "darkred" }
  if(Array10[8]=="bomb"){document.getElementById('cellE189').style.backgroundColor = "darkred" }
  if(Array10[9]=="bomb"){document.getElementById('cellE190').style.backgroundColor = "darkred" }
  if(Array10[10]=="bomb"){document.getElementById('cellE191').style.backgroundColor = "darkred" }
  if(Array10[11]=="bomb"){document.getElementById('cellE192').style.backgroundColor = "darkred" }
  if(Array10[12]=="bomb"){document.getElementById('cellE193').style.backgroundColor = "darkred" }
  if(Array10[13]=="bomb"){document.getElementById('cellE194').style.backgroundColor = "darkred" }
  if(Array10[14]=="bomb"){document.getElementById('cellE195').style.backgroundColor = "darkred" }
  if(Array10[15]=="bomb"){document.getElementById('cellE196').style.backgroundColor = "darkred" }
  if(Array10[16]=="bomb"){document.getElementById('cellE197').style.backgroundColor = "darkred" }
  if(Array10[17]=="bomb"){document.getElementById('cellE198').style.backgroundColor = "darkred" }
  if(Array10[18]=="bomb"){document.getElementById('cellE199').style.backgroundColor = "darkred" }
  if(Array10[19]=="bomb"){document.getElementById('cellE200').style.backgroundColor = "darkred" }
  //Break
  if(Array1[0]=="bomb"){document.getElementById('cellE1').innerHTML = "B"; }
  if(Array1[1]=="bomb"){document.getElementById('cellE2').innerHTML = "B"; }
  if(Array1[2]=="bomb"){document.getElementById('cellE3').innerHTML = "B"; }
  if(Array1[3]=="bomb"){document.getElementById('cellE4').innerHTML = "B"; }
  if(Array1[4]=="bomb"){document.getElementById('cellE5').innerHTML = "B"; }
  if(Array1[5]=="bomb"){document.getElementById('cellE6').innerHTML = "B"; }
  if(Array1[6]=="bomb"){document.getElementById('cellE7').innerHTML = "B"; }
  if(Array1[7]=="bomb"){document.getElementById('cellE8').innerHTML = "B"; }
  if(Array1[8]=="bomb"){document.getElementById('cellE9').innerHTML = "B"; }
  if(Array1[9]=="bomb"){document.getElementById('cellE10').innerHTML = "B"; }
  if(Array1[10]=="bomb"){document.getElementById('cellE11').innerHTML = "B"; }
  if(Array1[11]=="bomb"){document.getElementById('cellE12').innerHTML = "B"; }
  if(Array1[12]=="bomb"){document.getElementById('cellE13').innerHTML = "B"; }
  if(Array1[13]=="bomb"){document.getElementById('cellE14').innerHTML = "B"; }
  if(Array1[14]=="bomb"){document.getElementById('cellE15').innerHTML = "B"; }
  if(Array1[15]=="bomb"){document.getElementById('cellE16').innerHTML = "B"; }
  if(Array1[16]=="bomb"){document.getElementById('cellE17').innerHTML = "B"; }
  if(Array1[17]=="bomb"){document.getElementById('cellE18').innerHTML = "B"; }
  if(Array1[18]=="bomb"){document.getElementById('cellE19').innerHTML = "B"; }
  if(Array1[19]=="bomb"){document.getElementById('cellE20').innerHTML = "B"; }
  //Break
  if(Array2[0]=="bomb"){document.getElementById('cellE21').innerHTML = "B"; }
  if(Array2[1]=="bomb"){document.getElementById('cellE22').innerHTML = "B"; }
  if(Array2[2]=="bomb"){document.getElementById('cellE23').innerHTML = "B"; }
  if(Array2[3]=="bomb"){document.getElementById('cellE24').innerHTML = "B"; }
  if(Array2[4]=="bomb"){document.getElementById('cellE25').innerHTML = "B"; }
  if(Array2[5]=="bomb"){document.getElementById('cellE26').innerHTML = "B"; }
  if(Array2[6]=="bomb"){document.getElementById('cellE27').innerHTML = "B"; }
  if(Array2[7]=="bomb"){document.getElementById('cellE28').innerHTML = "B"; }
  if(Array2[8]=="bomb"){document.getElementById('cellE29').innerHTML = "B"; }
  if(Array2[9]=="bomb"){document.getElementById('cellE30').innerHTML = "B"; }
  if(Array2[10]=="bomb"){document.getElementById('cellE31').innerHTML = "B"; }
  if(Array2[11]=="bomb"){document.getElementById('cellE32').innerHTML = "B"; }
  if(Array2[12]=="bomb"){document.getElementById('cellE33').innerHTML = "B"; }
  if(Array2[13]=="bomb"){document.getElementById('cellE34').innerHTML = "B"; }
  if(Array2[14]=="bomb"){document.getElementById('cellE35').innerHTML = "B"; }
  if(Array2[15]=="bomb"){document.getElementById('cellE36').innerHTML = "B"; }
  if(Array2[16]=="bomb"){document.getElementById('cellE37').innerHTML = "B"; }
  if(Array2[17]=="bomb"){document.getElementById('cellE38').innerHTML = "B"; }
  if(Array2[18]=="bomb"){document.getElementById('cellE39').innerHTML = "B"; }
  if(Array2[19]=="bomb"){document.getElementById('cellE40').innerHTML = "B"; }
  //Break
  if(Array3[0]=="bomb"){document.getElementById('cellE41').innerHTML = "B"; }
  if(Array3[1]=="bomb"){document.getElementById('cellE42').innerHTML = "B"; }
  if(Array3[2]=="bomb"){document.getElementById('cellE43').innerHTML = "B"; }
  if(Array3[3]=="bomb"){document.getElementById('cellE44').innerHTML = "B"; }
  if(Array3[4]=="bomb"){document.getElementById('cellE45').innerHTML = "B"; }
  if(Array3[5]=="bomb"){document.getElementById('cellE46').innerHTML = "B"; }
  if(Array3[6]=="bomb"){document.getElementById('cellE47').innerHTML = "B"; }
  if(Array3[7]=="bomb"){document.getElementById('cellE48').innerHTML = "B"; }
  if(Array3[8]=="bomb"){document.getElementById('cellE49').innerHTML = "B"; }
  if(Array3[9]=="bomb"){document.getElementById('cellE50').innerHTML = "B"; }
  if(Array3[10]=="bomb"){document.getElementById('cellE51').innerHTML = "B"; }
  if(Array3[11]=="bomb"){document.getElementById('cellE52').innerHTML = "B"; }
  if(Array3[12]=="bomb"){document.getElementById('cellE53').innerHTML = "B"; }
  if(Array3[13]=="bomb"){document.getElementById('cellE54').innerHTML = "B"; }
  if(Array3[14]=="bomb"){document.getElementById('cellE55').innerHTML = "B"; }
  if(Array3[15]=="bomb"){document.getElementById('cellE56').innerHTML = "B"; }
  if(Array3[16]=="bomb"){document.getElementById('cellE57').innerHTML = "B"; }
  if(Array3[17]=="bomb"){document.getElementById('cellE58').innerHTML = "B"; }
  if(Array3[18]=="bomb"){document.getElementById('cellE59').innerHTML = "B"; }
  if(Array3[19]=="bomb"){document.getElementById('cellE60').innerHTML = "B"; }
  //Break
  if(Array4[0]=="bomb"){document.getElementById('cellE61').innerHTML = "B"; }
  if(Array4[1]=="bomb"){document.getElementById('cellE62').innerHTML = "B"; }
  if(Array4[2]=="bomb"){document.getElementById('cellE63').innerHTML = "B"; }
  if(Array4[3]=="bomb"){document.getElementById('cellE64').innerHTML = "B"; }
  if(Array4[4]=="bomb"){document.getElementById('cellE65').innerHTML = "B"; }
  if(Array4[5]=="bomb"){document.getElementById('cellE66').innerHTML = "B"; }
  if(Array4[6]=="bomb"){document.getElementById('cellE67').innerHTML = "B"; }
  if(Array4[7]=="bomb"){document.getElementById('cellE68').innerHTML = "B"; }
  if(Array4[8]=="bomb"){document.getElementById('cellE69').innerHTML = "B"; }
  if(Array4[9]=="bomb"){document.getElementById('cellE70').innerHTML = "B"; }
  if(Array4[10]=="bomb"){document.getElementById('cellE71').innerHTML = "B"; }
  if(Array4[11]=="bomb"){document.getElementById('cellE72').innerHTML = "B"; }
  if(Array4[12]=="bomb"){document.getElementById('cellE73').innerHTML = "B"; }
  if(Array4[13]=="bomb"){document.getElementById('cellE74').innerHTML = "B"; }
  if(Array4[14]=="bomb"){document.getElementById('cellE75').innerHTML = "B"; }
  if(Array4[15]=="bomb"){document.getElementById('cellE76').innerHTML = "B"; }
  if(Array4[16]=="bomb"){document.getElementById('cellE77').innerHTML = "B"; }
  if(Array4[17]=="bomb"){document.getElementById('cellE78').innerHTML = "B"; }
  if(Array4[18]=="bomb"){document.getElementById('cellE79').innerHTML = "B"; }
  if(Array4[19]=="bomb"){document.getElementById('cellE80').innerHTML = "B"; }
  //Break
  if(Array5[0]=="bomb"){document.getElementById('cellE81').innerHTML = "B"; }
  if(Array5[1]=="bomb"){document.getElementById('cellE82').innerHTML = "B"; }
  if(Array5[2]=="bomb"){document.getElementById('cellE83').innerHTML = "B"; }
  if(Array5[3]=="bomb"){document.getElementById('cellE84').innerHTML = "B"; }
  if(Array5[4]=="bomb"){document.getElementById('cellE85').innerHTML = "B"; }
  if(Array5[5]=="bomb"){document.getElementById('cellE86').innerHTML = "B"; }
  if(Array5[6]=="bomb"){document.getElementById('cellE87').innerHTML = "B"; }
  if(Array5[7]=="bomb"){document.getElementById('cellE88').innerHTML = "B"; }
  if(Array5[8]=="bomb"){document.getElementById('cellE89').innerHTML = "B"; }
  if(Array5[9]=="bomb"){document.getElementById('cellE90').innerHTML = "B"; }
  if(Array5[10]=="bomb"){document.getElementById('cellE91').innerHTML = "B"; }
  if(Array5[11]=="bomb"){document.getElementById('cellE92').innerHTML = "B"; }
  if(Array5[12]=="bomb"){document.getElementById('cellE93').innerHTML = "B"; }
  if(Array5[13]=="bomb"){document.getElementById('cellE94').innerHTML = "B"; }
  if(Array5[14]=="bomb"){document.getElementById('cellE95').innerHTML = "B"; }
  if(Array5[15]=="bomb"){document.getElementById('cellE96').innerHTML = "B"; }
  if(Array5[16]=="bomb"){document.getElementById('cellE97').innerHTML = "B"; }
  if(Array5[17]=="bomb"){document.getElementById('cellE98').innerHTML = "B"; }
  if(Array5[18]=="bomb"){document.getElementById('cellE99').innerHTML = "B"; }
  if(Array5[19]=="bomb"){document.getElementById('cellE100').innerHTML = "B"; }
  //Break
  if(Array6[0]=="bomb"){document.getElementById('cellE101').innerHTML = "B"; }
  if(Array6[1]=="bomb"){document.getElementById('cellE102').innerHTML = "B"; }
  if(Array6[2]=="bomb"){document.getElementById('cellE103').innerHTML = "B"; }
  if(Array6[3]=="bomb"){document.getElementById('cellE104').innerHTML = "B"; }
  if(Array6[4]=="bomb"){document.getElementById('cellE105').innerHTML = "B"; }
  if(Array6[5]=="bomb"){document.getElementById('cellE106').innerHTML = "B"; }
  if(Array6[6]=="bomb"){document.getElementById('cellE107').innerHTML = "B"; }
  if(Array6[7]=="bomb"){document.getElementById('cellE108').innerHTML = "B"; }
  if(Array6[8]=="bomb"){document.getElementById('cellE109').innerHTML = "B"; }
  if(Array6[9]=="bomb"){document.getElementById('cellE110').innerHTML = "B"; }
  if(Array6[10]=="bomb"){document.getElementById('cellE111').innerHTML = "B"; }
  if(Array6[11]=="bomb"){document.getElementById('cellE112').innerHTML = "B"; }
  if(Array6[12]=="bomb"){document.getElementById('cellE113').innerHTML = "B"; }
  if(Array6[13]=="bomb"){document.getElementById('cellE114').innerHTML = "B"; }
  if(Array6[14]=="bomb"){document.getElementById('cellE115').innerHTML = "B"; }
  if(Array6[15]=="bomb"){document.getElementById('cellE116').innerHTML = "B"; }
  if(Array6[16]=="bomb"){document.getElementById('cellE117').innerHTML = "B"; }
  if(Array6[17]=="bomb"){document.getElementById('cellE118').innerHTML = "B"; }
  if(Array6[18]=="bomb"){document.getElementById('cellE119').innerHTML = "B"; }
  if(Array6[19]=="bomb"){document.getElementById('cellE120').innerHTML = "B"; }
  //Break
  if(Array7[0]=="bomb"){document.getElementById('cellE121').innerHTML = "B"; }
  if(Array7[1]=="bomb"){document.getElementById('cellE122').innerHTML = "B"; }
  if(Array7[2]=="bomb"){document.getElementById('cellE123').innerHTML = "B"; }
  if(Array7[3]=="bomb"){document.getElementById('cellE124').innerHTML = "B"; }
  if(Array7[4]=="bomb"){document.getElementById('cellE125').innerHTML = "B"; }
  if(Array7[5]=="bomb"){document.getElementById('cellE126').innerHTML = "B"; }
  if(Array7[6]=="bomb"){document.getElementById('cellE127').innerHTML = "B"; }
  if(Array7[7]=="bomb"){document.getElementById('cellE128').innerHTML = "B"; }
  if(Array7[8]=="bomb"){document.getElementById('cellE129').innerHTML = "B"; }
  if(Array7[9]=="bomb"){document.getElementById('cellE130').innerHTML = "B"; }
  if(Array7[10]=="bomb"){document.getElementById('cellE131').innerHTML = "B"; }
  if(Array7[11]=="bomb"){document.getElementById('cellE132').innerHTML = "B"; }
  if(Array7[12]=="bomb"){document.getElementById('cellE133').innerHTML = "B"; }
  if(Array7[13]=="bomb"){document.getElementById('cellE134').innerHTML = "B"; }
  if(Array7[14]=="bomb"){document.getElementById('cellE135').innerHTML = "B"; }
  if(Array7[15]=="bomb"){document.getElementById('cellE136').innerHTML = "B"; }
  if(Array7[16]=="bomb"){document.getElementById('cellE137').innerHTML = "B"; }
  if(Array7[17]=="bomb"){document.getElementById('cellE138').innerHTML = "B"; }
  if(Array7[18]=="bomb"){document.getElementById('cellE139').innerHTML = "B"; }
  if(Array7[19]=="bomb"){document.getElementById('cellE140').innerHTML = "B"; }
  //Break
  if(Array8[0]=="bomb"){document.getElementById('cellE141').innerHTML = "B"; }
  if(Array8[1]=="bomb"){document.getElementById('cellE142').innerHTML = "B"; }
  if(Array8[2]=="bomb"){document.getElementById('cellE143').innerHTML = "B"; }
  if(Array8[3]=="bomb"){document.getElementById('cellE144').innerHTML = "B"; }
  if(Array8[4]=="bomb"){document.getElementById('cellE145').innerHTML = "B"; }
  if(Array8[5]=="bomb"){document.getElementById('cellE146').innerHTML = "B"; }
  if(Array8[6]=="bomb"){document.getElementById('cellE147').innerHTML = "B"; }
  if(Array8[7]=="bomb"){document.getElementById('cellE148').innerHTML = "B"; }
  if(Array8[8]=="bomb"){document.getElementById('cellE149').innerHTML = "B"; }
  if(Array8[9]=="bomb"){document.getElementById('cellE150').innerHTML = "B"; }
  if(Array8[10]=="bomb"){document.getElementById('cellE151').innerHTML = "B"; }
  if(Array8[11]=="bomb"){document.getElementById('cellE152').innerHTML = "B"; }
  if(Array8[12]=="bomb"){document.getElementById('cellE153').innerHTML = "B"; }
  if(Array8[13]=="bomb"){document.getElementById('cellE154').innerHTML = "B"; }
  if(Array8[14]=="bomb"){document.getElementById('cellE155').innerHTML = "B"; }
  if(Array8[15]=="bomb"){document.getElementById('cellE156').innerHTML = "B"; }
  if(Array8[16]=="bomb"){document.getElementById('cellE157').innerHTML = "B"; }
  if(Array8[17]=="bomb"){document.getElementById('cellE158').innerHTML = "B"; }
  if(Array8[18]=="bomb"){document.getElementById('cellE159').innerHTML = "B"; }
  if(Array8[19]=="bomb"){document.getElementById('cellE160').innerHTML = "B"; }
  //Break
  if(Array9[0]=="bomb"){document.getElementById('cellE161').innerHTML = "B"; }
  if(Array9[1]=="bomb"){document.getElementById('cellE162').innerHTML = "B"; }
  if(Array9[2]=="bomb"){document.getElementById('cellE163').innerHTML = "B"; }
  if(Array9[3]=="bomb"){document.getElementById('cellE164').innerHTML = "B"; }
  if(Array9[4]=="bomb"){document.getElementById('cellE165').innerHTML = "B"; }
  if(Array9[5]=="bomb"){document.getElementById('cellE166').innerHTML = "B"; }
  if(Array9[6]=="bomb"){document.getElementById('cellE167').innerHTML = "B"; }
  if(Array9[7]=="bomb"){document.getElementById('cellE168').innerHTML = "B"; }
  if(Array9[8]=="bomb"){document.getElementById('cellE169').innerHTML = "B"; }
  if(Array9[9]=="bomb"){document.getElementById('cellE170').innerHTML = "B"; }
  if(Array9[10]=="bomb"){document.getElementById('cellE171').innerHTML = "B"; }
  if(Array9[11]=="bomb"){document.getElementById('cellE172').innerHTML = "B"; }
  if(Array9[12]=="bomb"){document.getElementById('cellE173').innerHTML = "B"; }
  if(Array9[13]=="bomb"){document.getElementById('cellE174').innerHTML = "B"; }
  if(Array9[14]=="bomb"){document.getElementById('cellE175').innerHTML = "B"; }
  if(Array9[15]=="bomb"){document.getElementById('cellE176').innerHTML = "B"; }
  if(Array9[16]=="bomb"){document.getElementById('cellE177').innerHTML = "B"; }
  if(Array9[17]=="bomb"){document.getElementById('cellE178').innerHTML = "B"; }
  if(Array9[18]=="bomb"){document.getElementById('cellE179').innerHTML = "B"; }
  if(Array9[19]=="bomb"){document.getElementById('cellE180').innerHTML = "B"; }
  //Break
  if(Array10[0]=="bomb"){document.getElementById('cellE181').innerHTML = "B"; }
  if(Array10[1]=="bomb"){document.getElementById('cellE182').innerHTML = "B"; }
  if(Array10[2]=="bomb"){document.getElementById('cellE183').innerHTML = "B"; }
  if(Array10[3]=="bomb"){document.getElementById('cellE184').innerHTML = "B"; }
  if(Array10[4]=="bomb"){document.getElementById('cellE185').innerHTML = "B"; }
  if(Array10[5]=="bomb"){document.getElementById('cellE186').innerHTML = "B"; }
  if(Array10[6]=="bomb"){document.getElementById('cellE187').innerHTML = "B"; }
  if(Array10[7]=="bomb"){document.getElementById('cellE188').innerHTML = "B"; }
  if(Array10[8]=="bomb"){document.getElementById('cellE189').innerHTML = "B"; }
  if(Array10[9]=="bomb"){document.getElementById('cellE190').innerHTML = "B"; }
  if(Array10[10]=="bomb"){document.getElementById('cellE191').innerHTML = "B"; }
  if(Array10[11]=="bomb"){document.getElementById('cellE192').innerHTML = "B"; }
  if(Array10[12]=="bomb"){document.getElementById('cellE193').innerHTML = "B"; }
  if(Array10[13]=="bomb"){document.getElementById('cellE194').innerHTML = "B"; }
  if(Array10[14]=="bomb"){document.getElementById('cellE195').innerHTML = "B"; }
  if(Array10[15]=="bomb"){document.getElementById('cellE196').innerHTML = "B"; }
  if(Array10[16]=="bomb"){document.getElementById('cellE197').innerHTML = "B"; }
  if(Array10[17]=="bomb"){document.getElementById('cellE198').innerHTML = "B"; }
  if(Array10[18]=="bomb"){document.getElementById('cellE199').innerHTML = "B"; }
  if(Array10[19]=="bomb"){document.getElementById('cellE200').innerHTML = "B"; }
  //Break
}

function Flip()
{
  document.getElementById('Score').disabled = false;
  Score = 0;
  document.getElementById('Score').value = Score;
  document.getElementById('Score').innerHTML = Score;
  document.getElementById('Score').disabled = true;
  document.getElementById('cellE1').disabled = false;
  document.getElementById('cellE2').disabled = false;
  document.getElementById('cellE3').disabled = false;
  document.getElementById('cellE4').disabled = false;
  document.getElementById('cellE5').disabled = false;
  document.getElementById('cellE6').disabled = false;
  document.getElementById('cellE7').disabled = false;
  document.getElementById('cellE8').disabled = false;
  document.getElementById('cellE9').disabled = false;
  document.getElementById('cellE10').disabled = false;
  document.getElementById('cellE11').disabled = false;
  document.getElementById('cellE12').disabled = false;
  document.getElementById('cellE13').disabled = false;
  document.getElementById('cellE14').disabled = false;
  document.getElementById('cellE15').disabled = false;
  document.getElementById('cellE16').disabled = false;
  document.getElementById('cellE17').disabled = false;
  document.getElementById('cellE18').disabled = false;
  document.getElementById('cellE19').disabled = false;
  document.getElementById('cellE20').disabled = false;
  document.getElementById('cellE21').disabled = false;
  document.getElementById('cellE22').disabled = false;
  document.getElementById('cellE23').disabled = false;
  document.getElementById('cellE24').disabled = false;
  document.getElementById('cellE25').disabled = false;
  document.getElementById('cellE26').disabled = false;
  document.getElementById('cellE27').disabled = false;
  document.getElementById('cellE28').disabled = false;
  document.getElementById('cellE29').disabled = false;
  document.getElementById('cellE30').disabled = false;
  document.getElementById('cellE31').disabled = false;
  document.getElementById('cellE32').disabled = false;
  document.getElementById('cellE33').disabled = false;
  document.getElementById('cellE34').disabled = false;
  document.getElementById('cellE35').disabled = false;
  document.getElementById('cellE36').disabled = false;
  document.getElementById('cellE37').disabled = false;
  document.getElementById('cellE38').disabled = false;
  document.getElementById('cellE39').disabled = false;
  document.getElementById('cellE40').disabled = false;
  document.getElementById('cellE41').disabled = false;
  document.getElementById('cellE42').disabled = false;
  document.getElementById('cellE43').disabled = false;
  document.getElementById('cellE44').disabled = false;
  document.getElementById('cellE45').disabled = false;
  document.getElementById('cellE46').disabled = false;
  document.getElementById('cellE47').disabled = false;
  document.getElementById('cellE48').disabled = false;
  document.getElementById('cellE49').disabled = false;
  document.getElementById('cellE50').disabled = false;
  document.getElementById('cellE51').disabled = false;
  document.getElementById('cellE52').disabled = false;
  document.getElementById('cellE53').disabled = false;
  document.getElementById('cellE54').disabled = false;
  document.getElementById('cellE55').disabled = false;
  document.getElementById('cellE56').disabled = false;
  document.getElementById('cellE57').disabled = false;
  document.getElementById('cellE58').disabled = false;
  document.getElementById('cellE59').disabled = false;
  document.getElementById('cellE60').disabled = false;
  document.getElementById('cellE61').disabled = false;
  document.getElementById('cellE62').disabled = false;
  document.getElementById('cellE63').disabled = false;
  document.getElementById('cellE64').disabled = false;
  document.getElementById('cellE65').disabled = false;
  document.getElementById('cellE66').disabled = false;
  document.getElementById('cellE67').disabled = false;
  document.getElementById('cellE68').disabled = false;
  document.getElementById('cellE69').disabled = false;
  document.getElementById('cellE70').disabled = false;
  document.getElementById('cellE71').disabled = false;
  document.getElementById('cellE72').disabled = false;
  document.getElementById('cellE73').disabled = false;
  document.getElementById('cellE74').disabled = false;
  document.getElementById('cellE75').disabled = false;
  document.getElementById('cellE76').disabled = false;
  document.getElementById('cellE77').disabled = false;
  document.getElementById('cellE78').disabled = false;
  document.getElementById('cellE79').disabled = false;
  document.getElementById('cellE80').disabled = false;
  document.getElementById('cellE81').disabled = false;
  document.getElementById('cellE82').disabled = false;
  document.getElementById('cellE83').disabled = false;
  document.getElementById('cellE84').disabled = false;
  document.getElementById('cellE85').disabled = false;
  document.getElementById('cellE86').disabled = false;
  document.getElementById('cellE87').disabled = false;
  document.getElementById('cellE88').disabled = false;
  document.getElementById('cellE89').disabled = false;
  document.getElementById('cellE90').disabled = false;
  document.getElementById('cellE91').disabled = false;
  document.getElementById('cellE92').disabled = false;
  document.getElementById('cellE93').disabled = false;
  document.getElementById('cellE94').disabled = false;
  document.getElementById('cellE95').disabled = false;
  document.getElementById('cellE96').disabled = false;
  document.getElementById('cellE97').disabled = false;
  document.getElementById('cellE98').disabled = false;
  document.getElementById('cellE99').disabled = false;
  document.getElementById('cellE100').disabled = false;
  document.getElementById('cellE101').disabled = false;
  document.getElementById('cellE102').disabled = false;
  document.getElementById('cellE103').disabled = false;
  document.getElementById('cellE104').disabled = false;
  document.getElementById('cellE105').disabled = false;
  document.getElementById('cellE106').disabled = false;
  document.getElementById('cellE107').disabled = false;
  document.getElementById('cellE108').disabled = false;
  document.getElementById('cellE109').disabled = false;
  document.getElementById('cellE110').disabled = false;
  document.getElementById('cellE111').disabled = false;
  document.getElementById('cellE112').disabled = false;
  document.getElementById('cellE113').disabled = false;
  document.getElementById('cellE114').disabled = false;
  document.getElementById('cellE115').disabled = false;
  document.getElementById('cellE116').disabled = false;
  document.getElementById('cellE117').disabled = false;
  document.getElementById('cellE118').disabled = false;
  document.getElementById('cellE119').disabled = false;
  document.getElementById('cellE120').disabled = false;
  document.getElementById('cellE121').disabled = false;
  document.getElementById('cellE122').disabled = false;
  document.getElementById('cellE123').disabled = false;
  document.getElementById('cellE124').disabled = false;
  document.getElementById('cellE125').disabled = false;
  document.getElementById('cellE126').disabled = false;
  document.getElementById('cellE127').disabled = false;
  document.getElementById('cellE128').disabled = false;
  document.getElementById('cellE129').disabled = false;
  document.getElementById('cellE130').disabled = false;
  document.getElementById('cellE131').disabled = false;
  document.getElementById('cellE132').disabled = false;
  document.getElementById('cellE133').disabled = false;
  document.getElementById('cellE134').disabled = false;
  document.getElementById('cellE135').disabled = false;
  document.getElementById('cellE136').disabled = false;
  document.getElementById('cellE137').disabled = false;
  document.getElementById('cellE138').disabled = false;
  document.getElementById('cellE139').disabled = false;
  document.getElementById('cellE140').disabled = false;
  document.getElementById('cellE141').disabled = false;
  document.getElementById('cellE142').disabled = false;
  document.getElementById('cellE143').disabled = false;
  document.getElementById('cellE144').disabled = false;
  document.getElementById('cellE145').disabled = false;
  document.getElementById('cellE146').disabled = false;
  document.getElementById('cellE147').disabled = false;
  document.getElementById('cellE148').disabled = false;
  document.getElementById('cellE149').disabled = false;
  document.getElementById('cellE150').disabled = false;
  document.getElementById('cellE151').disabled = false;
  document.getElementById('cellE152').disabled = false;
  document.getElementById('cellE153').disabled = false;
  document.getElementById('cellE154').disabled = false;
  document.getElementById('cellE155').disabled = false;
  document.getElementById('cellE156').disabled = false;
  document.getElementById('cellE157').disabled = false;
  document.getElementById('cellE158').disabled = false;
  document.getElementById('cellE159').disabled = false;
  document.getElementById('cellE160').disabled = false;
  document.getElementById('cellE161').disabled = false;
  document.getElementById('cellE162').disabled = false;
  document.getElementById('cellE163').disabled = false;
  document.getElementById('cellE164').disabled = false;
  document.getElementById('cellE165').disabled = false;
  document.getElementById('cellE166').disabled = false;
  document.getElementById('cellE167').disabled = false;
  document.getElementById('cellE168').disabled = false;
  document.getElementById('cellE169').disabled = false;
  document.getElementById('cellE170').disabled = false;
  document.getElementById('cellE171').disabled = false;
  document.getElementById('cellE172').disabled = false;
  document.getElementById('cellE173').disabled = false;
  document.getElementById('cellE174').disabled = false;
  document.getElementById('cellE175').disabled = false;
  document.getElementById('cellE176').disabled = false;
  document.getElementById('cellE177').disabled = false;
  document.getElementById('cellE178').disabled = false;
  document.getElementById('cellE179').disabled = false;
  document.getElementById('cellE180').disabled = false;
  document.getElementById('cellE181').disabled = false;
  document.getElementById('cellE182').disabled = false;
  document.getElementById('cellE183').disabled = false;
  document.getElementById('cellE184').disabled = false;
  document.getElementById('cellE185').disabled = false;
  document.getElementById('cellE186').disabled = false;
  document.getElementById('cellE187').disabled = false;
  document.getElementById('cellE188').disabled = false;
  document.getElementById('cellE189').disabled = false;
  document.getElementById('cellE190').disabled = false;
  document.getElementById('cellE191').disabled = false;
  document.getElementById('cellE192').disabled = false;
  document.getElementById('cellE193').disabled = false;
  document.getElementById('cellE194').disabled = false;
  document.getElementById('cellE195').disabled = false;
  document.getElementById('cellE196').disabled = false;
  document.getElementById('cellE197').disabled = false;
  document.getElementById('cellE198').disabled = false;
  document.getElementById('cellE199').disabled = false;
  document.getElementById('cellE200').disabled = false;
  //Break
  //Break
  //Break
  document.getElementById('cellE1').style.backgroundColor = "gray";
  document.getElementById('cellE2').style.backgroundColor = "gray";
  document.getElementById('cellE3').style.backgroundColor = "gray";
  document.getElementById('cellE4').style.backgroundColor = "gray";
  document.getElementById('cellE5').style.backgroundColor = "gray";
  document.getElementById('cellE6').style.backgroundColor = "gray";
  document.getElementById('cellE7').style.backgroundColor = "gray";
  document.getElementById('cellE8').style.backgroundColor = "gray";
  document.getElementById('cellE9').style.backgroundColor = "gray";
  document.getElementById('cellE10').style.backgroundColor = "gray";
  document.getElementById('cellE11').style.backgroundColor = "gray";
  document.getElementById('cellE12').style.backgroundColor = "gray";
  document.getElementById('cellE13').style.backgroundColor = "gray";
  document.getElementById('cellE14').style.backgroundColor = "gray";
  document.getElementById('cellE15').style.backgroundColor = "gray";
  document.getElementById('cellE16').style.backgroundColor = "gray";
  document.getElementById('cellE17').style.backgroundColor = "gray";
  document.getElementById('cellE18').style.backgroundColor = "gray";
  document.getElementById('cellE19').style.backgroundColor = "gray";
  document.getElementById('cellE20').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE21').style.backgroundColor = "gray";
  document.getElementById('cellE22').style.backgroundColor = "gray";
  document.getElementById('cellE23').style.backgroundColor = "gray";
  document.getElementById('cellE24').style.backgroundColor = "gray";
  document.getElementById('cellE25').style.backgroundColor = "gray";
  document.getElementById('cellE26').style.backgroundColor = "gray";
  document.getElementById('cellE27').style.backgroundColor = "gray";
  document.getElementById('cellE28').style.backgroundColor = "gray";
  document.getElementById('cellE29').style.backgroundColor = "gray";
  document.getElementById('cellE30').style.backgroundColor = "gray";
  document.getElementById('cellE31').style.backgroundColor = "gray";
  document.getElementById('cellE32').style.backgroundColor = "gray";
  document.getElementById('cellE33').style.backgroundColor = "gray";
  document.getElementById('cellE34').style.backgroundColor = "gray";
  document.getElementById('cellE35').style.backgroundColor = "gray";
  document.getElementById('cellE36').style.backgroundColor = "gray";
  document.getElementById('cellE37').style.backgroundColor = "gray";
  document.getElementById('cellE38').style.backgroundColor = "gray";
  document.getElementById('cellE39').style.backgroundColor = "gray";
  document.getElementById('cellE40').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE41').style.backgroundColor = "gray";
  document.getElementById('cellE42').style.backgroundColor = "gray";
  document.getElementById('cellE43').style.backgroundColor = "gray";
  document.getElementById('cellE44').style.backgroundColor = "gray";
  document.getElementById('cellE45').style.backgroundColor = "gray";
  document.getElementById('cellE46').style.backgroundColor = "gray";
  document.getElementById('cellE47').style.backgroundColor = "gray";
  document.getElementById('cellE48').style.backgroundColor = "gray";
  document.getElementById('cellE49').style.backgroundColor = "gray";
  document.getElementById('cellE50').style.backgroundColor = "gray";
  document.getElementById('cellE51').style.backgroundColor = "gray";
  document.getElementById('cellE52').style.backgroundColor = "gray";
  document.getElementById('cellE53').style.backgroundColor = "gray";
  document.getElementById('cellE54').style.backgroundColor = "gray";
  document.getElementById('cellE55').style.backgroundColor = "gray";
  document.getElementById('cellE56').style.backgroundColor = "gray";
  document.getElementById('cellE57').style.backgroundColor = "gray";
  document.getElementById('cellE58').style.backgroundColor = "gray";
  document.getElementById('cellE59').style.backgroundColor = "gray";
  document.getElementById('cellE60').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE61').style.backgroundColor = "gray";
  document.getElementById('cellE62').style.backgroundColor = "gray";
  document.getElementById('cellE63').style.backgroundColor = "gray";
  document.getElementById('cellE64').style.backgroundColor = "gray";
  document.getElementById('cellE65').style.backgroundColor = "gray";
  document.getElementById('cellE66').style.backgroundColor = "gray";
  document.getElementById('cellE67').style.backgroundColor = "gray";
  document.getElementById('cellE68').style.backgroundColor = "gray";
  document.getElementById('cellE69').style.backgroundColor = "gray";
  document.getElementById('cellE70').style.backgroundColor = "gray";
  document.getElementById('cellE71').style.backgroundColor = "gray";
  document.getElementById('cellE72').style.backgroundColor = "gray";
  document.getElementById('cellE73').style.backgroundColor = "gray";
  document.getElementById('cellE74').style.backgroundColor = "gray";
  document.getElementById('cellE75').style.backgroundColor = "gray";
  document.getElementById('cellE76').style.backgroundColor = "gray";
  document.getElementById('cellE77').style.backgroundColor = "gray";
  document.getElementById('cellE78').style.backgroundColor = "gray";
  document.getElementById('cellE79').style.backgroundColor = "gray";
  document.getElementById('cellE80').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE81').style.backgroundColor = "gray";
  document.getElementById('cellE82').style.backgroundColor = "gray";
  document.getElementById('cellE83').style.backgroundColor = "gray";
  document.getElementById('cellE84').style.backgroundColor = "gray";
  document.getElementById('cellE85').style.backgroundColor = "gray";
  document.getElementById('cellE86').style.backgroundColor = "gray";
  document.getElementById('cellE87').style.backgroundColor = "gray";
  document.getElementById('cellE88').style.backgroundColor = "gray";
  document.getElementById('cellE89').style.backgroundColor = "gray";
  document.getElementById('cellE90').style.backgroundColor = "gray";
  document.getElementById('cellE91').style.backgroundColor = "gray";
  document.getElementById('cellE92').style.backgroundColor = "gray";
  document.getElementById('cellE93').style.backgroundColor = "gray";
  document.getElementById('cellE94').style.backgroundColor = "gray";
  document.getElementById('cellE95').style.backgroundColor = "gray";
  document.getElementById('cellE96').style.backgroundColor = "gray";
  document.getElementById('cellE97').style.backgroundColor = "gray";
  document.getElementById('cellE98').style.backgroundColor = "gray";
  document.getElementById('cellE99').style.backgroundColor = "gray";
  document.getElementById('cellE100').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE101').style.backgroundColor = "gray";
  document.getElementById('cellE102').style.backgroundColor = "gray";
  document.getElementById('cellE103').style.backgroundColor = "gray";
  document.getElementById('cellE104').style.backgroundColor = "gray";
  document.getElementById('cellE105').style.backgroundColor = "gray";
  document.getElementById('cellE106').style.backgroundColor = "gray";
  document.getElementById('cellE107').style.backgroundColor = "gray";
  document.getElementById('cellE108').style.backgroundColor = "gray";
  document.getElementById('cellE109').style.backgroundColor = "gray";
  document.getElementById('cellE110').style.backgroundColor = "gray";
  document.getElementById('cellE111').style.backgroundColor = "gray";
  document.getElementById('cellE112').style.backgroundColor = "gray";
  document.getElementById('cellE113').style.backgroundColor = "gray";
  document.getElementById('cellE114').style.backgroundColor = "gray";
  document.getElementById('cellE115').style.backgroundColor = "gray";
  document.getElementById('cellE116').style.backgroundColor = "gray";
  document.getElementById('cellE117').style.backgroundColor = "gray";
  document.getElementById('cellE118').style.backgroundColor = "gray";
  document.getElementById('cellE119').style.backgroundColor = "gray";
  document.getElementById('cellE120').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE121').style.backgroundColor = "gray";
  document.getElementById('cellE122').style.backgroundColor = "gray";
  document.getElementById('cellE123').style.backgroundColor = "gray";
  document.getElementById('cellE124').style.backgroundColor = "gray";
  document.getElementById('cellE125').style.backgroundColor = "gray";
  document.getElementById('cellE126').style.backgroundColor = "gray";
  document.getElementById('cellE127').style.backgroundColor = "gray";
  document.getElementById('cellE128').style.backgroundColor = "gray";
  document.getElementById('cellE129').style.backgroundColor = "gray";
  document.getElementById('cellE130').style.backgroundColor = "gray";
  document.getElementById('cellE131').style.backgroundColor = "gray";
  document.getElementById('cellE132').style.backgroundColor = "gray";
  document.getElementById('cellE133').style.backgroundColor = "gray";
  document.getElementById('cellE134').style.backgroundColor = "gray";
  document.getElementById('cellE135').style.backgroundColor = "gray";
  document.getElementById('cellE136').style.backgroundColor = "gray";
  document.getElementById('cellE137').style.backgroundColor = "gray";
  document.getElementById('cellE138').style.backgroundColor = "gray";
  document.getElementById('cellE139').style.backgroundColor = "gray";
  document.getElementById('cellE140').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE141').style.backgroundColor = "gray";
  document.getElementById('cellE142').style.backgroundColor = "gray";
  document.getElementById('cellE143').style.backgroundColor = "gray";
  document.getElementById('cellE144').style.backgroundColor = "gray";
  document.getElementById('cellE145').style.backgroundColor = "gray";
  document.getElementById('cellE146').style.backgroundColor = "gray";
  document.getElementById('cellE147').style.backgroundColor = "gray";
  document.getElementById('cellE148').style.backgroundColor = "gray";
  document.getElementById('cellE149').style.backgroundColor = "gray";
  document.getElementById('cellE150').style.backgroundColor = "gray";
  document.getElementById('cellE151').style.backgroundColor = "gray";
  document.getElementById('cellE152').style.backgroundColor = "gray";
  document.getElementById('cellE153').style.backgroundColor = "gray";
  document.getElementById('cellE154').style.backgroundColor = "gray";
  document.getElementById('cellE155').style.backgroundColor = "gray";
  document.getElementById('cellE156').style.backgroundColor = "gray";
  document.getElementById('cellE157').style.backgroundColor = "gray";
  document.getElementById('cellE158').style.backgroundColor = "gray";
  document.getElementById('cellE159').style.backgroundColor = "gray";
  document.getElementById('cellE160').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE161').style.backgroundColor = "gray";
  document.getElementById('cellE162').style.backgroundColor = "gray";
  document.getElementById('cellE163').style.backgroundColor = "gray";
  document.getElementById('cellE164').style.backgroundColor = "gray";
  document.getElementById('cellE165').style.backgroundColor = "gray";
  document.getElementById('cellE166').style.backgroundColor = "gray";
  document.getElementById('cellE167').style.backgroundColor = "gray";
  document.getElementById('cellE168').style.backgroundColor = "gray";
  document.getElementById('cellE169').style.backgroundColor = "gray";
  document.getElementById('cellE170').style.backgroundColor = "gray";
  document.getElementById('cellE171').style.backgroundColor = "gray";
  document.getElementById('cellE172').style.backgroundColor = "gray";
  document.getElementById('cellE173').style.backgroundColor = "gray";
  document.getElementById('cellE174').style.backgroundColor = "gray";
  document.getElementById('cellE175').style.backgroundColor = "gray";
  document.getElementById('cellE176').style.backgroundColor = "gray";
  document.getElementById('cellE177').style.backgroundColor = "gray";
  document.getElementById('cellE178').style.backgroundColor = "gray";
  document.getElementById('cellE179').style.backgroundColor = "gray";
  document.getElementById('cellE180').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE181').style.backgroundColor = "gray";
  document.getElementById('cellE182').style.backgroundColor = "gray";
  document.getElementById('cellE183').style.backgroundColor = "gray";
  document.getElementById('cellE184').style.backgroundColor = "gray";
  document.getElementById('cellE185').style.backgroundColor = "gray";
  document.getElementById('cellE186').style.backgroundColor = "gray";
  document.getElementById('cellE187').style.backgroundColor = "gray";
  document.getElementById('cellE188').style.backgroundColor = "gray";
  document.getElementById('cellE189').style.backgroundColor = "gray";
  document.getElementById('cellE190').style.backgroundColor = "gray";
  document.getElementById('cellE191').style.backgroundColor = "gray";
  document.getElementById('cellE192').style.backgroundColor = "gray";
  document.getElementById('cellE193').style.backgroundColor = "gray";
  document.getElementById('cellE194').style.backgroundColor = "gray";
  document.getElementById('cellE195').style.backgroundColor = "gray";
  document.getElementById('cellE196').style.backgroundColor = "gray";
  document.getElementById('cellE197').style.backgroundColor = "gray";
  document.getElementById('cellE198').style.backgroundColor = "gray";
  document.getElementById('cellE199').style.backgroundColor = "gray";
  document.getElementById('cellE200').style.backgroundColor = "gray";
  //Break
  document.getElementById('cellE1').innerHTML = "-";
  document.getElementById('cellE2').innerHTML = "-";
  document.getElementById('cellE3').innerHTML = "-";
  document.getElementById('cellE4').innerHTML = "-";
  document.getElementById('cellE5').innerHTML = "-";
  document.getElementById('cellE6').innerHTML = "-";
  document.getElementById('cellE7').innerHTML = "-";
  document.getElementById('cellE8').innerHTML = "-";
  document.getElementById('cellE9').innerHTML = "-";
  document.getElementById('cellE10').innerHTML = "-";
  document.getElementById('cellE11').innerHTML = "-";
  document.getElementById('cellE12').innerHTML = "-";
  document.getElementById('cellE13').innerHTML = "-";
  document.getElementById('cellE14').innerHTML = "-";
  document.getElementById('cellE15').innerHTML = "-";
  document.getElementById('cellE16').innerHTML = "-";
  document.getElementById('cellE17').innerHTML = "-";
  document.getElementById('cellE18').innerHTML = "-";
  document.getElementById('cellE19').innerHTML = "-";
  document.getElementById('cellE20').innerHTML = "-";
  //Break
  document.getElementById('cellE21').innerHTML = "-";
  document.getElementById('cellE22').innerHTML = "-";
  document.getElementById('cellE23').innerHTML = "-";
  document.getElementById('cellE24').innerHTML = "-";
  document.getElementById('cellE25').innerHTML = "-";
  document.getElementById('cellE26').innerHTML = "-";
  document.getElementById('cellE27').innerHTML = "-";
  document.getElementById('cellE28').innerHTML = "-";
  document.getElementById('cellE29').innerHTML = "-";
  document.getElementById('cellE30').innerHTML = "-";
  document.getElementById('cellE31').innerHTML = "-";
  document.getElementById('cellE32').innerHTML = "-";
  document.getElementById('cellE33').innerHTML = "-";
  document.getElementById('cellE34').innerHTML = "-";
  document.getElementById('cellE35').innerHTML = "-";
  document.getElementById('cellE36').innerHTML = "-";
  document.getElementById('cellE37').innerHTML = "-";
  document.getElementById('cellE38').innerHTML = "-";
  document.getElementById('cellE39').innerHTML = "-";
  document.getElementById('cellE40').innerHTML = "-";
  //Break
  document.getElementById('cellE41').innerHTML = "-";
  document.getElementById('cellE42').innerHTML = "-";
  document.getElementById('cellE43').innerHTML = "-";
  document.getElementById('cellE44').innerHTML = "-";
  document.getElementById('cellE45').innerHTML = "-";
  document.getElementById('cellE46').innerHTML = "-";
  document.getElementById('cellE47').innerHTML = "-";
  document.getElementById('cellE48').innerHTML = "-";
  document.getElementById('cellE49').innerHTML = "-";
  document.getElementById('cellE50').innerHTML = "-";
  document.getElementById('cellE51').innerHTML = "-";
  document.getElementById('cellE52').innerHTML = "-";
  document.getElementById('cellE53').innerHTML = "-";
  document.getElementById('cellE54').innerHTML = "-";
  document.getElementById('cellE55').innerHTML = "-";
  document.getElementById('cellE56').innerHTML = "-";
  document.getElementById('cellE57').innerHTML = "-";
  document.getElementById('cellE58').innerHTML = "-";
  document.getElementById('cellE59').innerHTML = "-";
  document.getElementById('cellE60').innerHTML = "-";
  //Break
  document.getElementById('cellE61').innerHTML = "-";
  document.getElementById('cellE62').innerHTML = "-";
  document.getElementById('cellE63').innerHTML = "-";
  document.getElementById('cellE64').innerHTML = "-";
  document.getElementById('cellE65').innerHTML = "-";
  document.getElementById('cellE66').innerHTML = "-";
  document.getElementById('cellE67').innerHTML = "-";
  document.getElementById('cellE68').innerHTML = "-";
  document.getElementById('cellE69').innerHTML = "-";
  document.getElementById('cellE70').innerHTML = "-";
  document.getElementById('cellE71').innerHTML = "-";
  document.getElementById('cellE72').innerHTML = "-";
  document.getElementById('cellE73').innerHTML = "-";
  document.getElementById('cellE74').innerHTML = "-";
  document.getElementById('cellE75').innerHTML = "-";
  document.getElementById('cellE76').innerHTML = "-";
  document.getElementById('cellE77').innerHTML = "-";
  document.getElementById('cellE78').innerHTML = "-";
  document.getElementById('cellE79').innerHTML = "-";
  document.getElementById('cellE80').innerHTML = "-";
  //Break
  document.getElementById('cellE81').innerHTML = "-";
  document.getElementById('cellE82').innerHTML = "-";
  document.getElementById('cellE83').innerHTML = "-";
  document.getElementById('cellE84').innerHTML = "-";
  document.getElementById('cellE85').innerHTML = "-";
  document.getElementById('cellE86').innerHTML = "-";
  document.getElementById('cellE87').innerHTML = "-";
  document.getElementById('cellE88').innerHTML = "-";
  document.getElementById('cellE89').innerHTML = "-";
  document.getElementById('cellE90').innerHTML = "-";
  document.getElementById('cellE91').innerHTML = "-";
  document.getElementById('cellE92').innerHTML = "-";
  document.getElementById('cellE93').innerHTML = "-";
  document.getElementById('cellE94').innerHTML = "-";
  document.getElementById('cellE95').innerHTML = "-";
  document.getElementById('cellE96').innerHTML = "-";
  document.getElementById('cellE97').innerHTML = "-";
  document.getElementById('cellE98').innerHTML = "-";
  document.getElementById('cellE99').innerHTML = "-";
  document.getElementById('cellE100').innerHTML = "-";
  //Break
  document.getElementById('cellE101').innerHTML = "-";
  document.getElementById('cellE102').innerHTML = "-";
  document.getElementById('cellE103').innerHTML = "-";
  document.getElementById('cellE104').innerHTML = "-";
  document.getElementById('cellE105').innerHTML = "-";
  document.getElementById('cellE106').innerHTML = "-";
  document.getElementById('cellE107').innerHTML = "-";
  document.getElementById('cellE108').innerHTML = "-";
  document.getElementById('cellE109').innerHTML = "-";
  document.getElementById('cellE110').innerHTML = "-";
  document.getElementById('cellE111').innerHTML = "-";
  document.getElementById('cellE112').innerHTML = "-";
  document.getElementById('cellE113').innerHTML = "-";
  document.getElementById('cellE114').innerHTML = "-";
  document.getElementById('cellE115').innerHTML = "-";
  document.getElementById('cellE116').innerHTML = "-";
  document.getElementById('cellE117').innerHTML = "-";
  document.getElementById('cellE118').innerHTML = "-";
  document.getElementById('cellE119').innerHTML = "-";
  document.getElementById('cellE120').innerHTML = "-";
  //Break
  document.getElementById('cellE121').innerHTML = "-";
  document.getElementById('cellE122').innerHTML = "-";
  document.getElementById('cellE123').innerHTML = "-";
  document.getElementById('cellE124').innerHTML = "-";
  document.getElementById('cellE125').innerHTML = "-";
  document.getElementById('cellE126').innerHTML = "-";
  document.getElementById('cellE127').innerHTML = "-";
  document.getElementById('cellE128').innerHTML = "-";
  document.getElementById('cellE129').innerHTML = "-";
  document.getElementById('cellE130').innerHTML = "-";
  document.getElementById('cellE131').innerHTML = "-";
  document.getElementById('cellE132').innerHTML = "-";
  document.getElementById('cellE133').innerHTML = "-";
  document.getElementById('cellE134').innerHTML = "-";
  document.getElementById('cellE135').innerHTML = "-";
  document.getElementById('cellE136').innerHTML = "-";
  document.getElementById('cellE137').innerHTML = "-";
  document.getElementById('cellE138').innerHTML = "-";
  document.getElementById('cellE139').innerHTML = "-";
  document.getElementById('cellE140').innerHTML = "-";
  //Break
  document.getElementById('cellE141').innerHTML = "-";
  document.getElementById('cellE142').innerHTML = "-";
  document.getElementById('cellE143').innerHTML = "-";
  document.getElementById('cellE144').innerHTML = "-";
  document.getElementById('cellE145').innerHTML = "-";
  document.getElementById('cellE146').innerHTML = "-";
  document.getElementById('cellE147').innerHTML = "-";
  document.getElementById('cellE148').innerHTML = "-";
  document.getElementById('cellE149').innerHTML = "-";
  document.getElementById('cellE150').innerHTML = "-";
  document.getElementById('cellE151').innerHTML = "-";
  document.getElementById('cellE152').innerHTML = "-";
  document.getElementById('cellE153').innerHTML = "-";
  document.getElementById('cellE154').innerHTML = "-";
  document.getElementById('cellE155').innerHTML = "-";
  document.getElementById('cellE156').innerHTML = "-";
  document.getElementById('cellE157').innerHTML = "-";
  document.getElementById('cellE158').innerHTML = "-";
  document.getElementById('cellE159').innerHTML = "-";
  document.getElementById('cellE160').innerHTML = "-";
  //Break
  document.getElementById('cellE161').innerHTML = "-";
  document.getElementById('cellE162').innerHTML = "-";
  document.getElementById('cellE163').innerHTML = "-";
  document.getElementById('cellE164').innerHTML = "-";
  document.getElementById('cellE165').innerHTML = "-";
  document.getElementById('cellE166').innerHTML = "-";
  document.getElementById('cellE167').innerHTML = "-";
  document.getElementById('cellE168').innerHTML = "-";
  document.getElementById('cellE169').innerHTML = "-";
  document.getElementById('cellE170').innerHTML = "-";
  document.getElementById('cellE171').innerHTML = "-";
  document.getElementById('cellE172').innerHTML = "-";
  document.getElementById('cellE173').innerHTML = "-";
  document.getElementById('cellE174').innerHTML = "-";
  document.getElementById('cellE175').innerHTML = "-";
  document.getElementById('cellE176').innerHTML = "-";
  document.getElementById('cellE177').innerHTML = "-";
  document.getElementById('cellE178').innerHTML = "-";
  document.getElementById('cellE179').innerHTML = "-";
  document.getElementById('cellE180').innerHTML = "-";
  //Break
  document.getElementById('cellE181').innerHTML = "-";
  document.getElementById('cellE182').innerHTML = "-";
  document.getElementById('cellE183').innerHTML = "-";
  document.getElementById('cellE184').innerHTML = "-";
  document.getElementById('cellE185').innerHTML = "-";
  document.getElementById('cellE186').innerHTML = "-";
  document.getElementById('cellE187').innerHTML = "-";
  document.getElementById('cellE188').innerHTML = "-";
  document.getElementById('cellE189').innerHTML = "-";
  document.getElementById('cellE190').innerHTML = "-";
  document.getElementById('cellE191').innerHTML = "-";
  document.getElementById('cellE192').innerHTML = "-";
  document.getElementById('cellE193').innerHTML = "-";
  document.getElementById('cellE194').innerHTML = "-";
  document.getElementById('cellE195').innerHTML = "-";
  document.getElementById('cellE196').innerHTML = "-";
  document.getElementById('cellE197').innerHTML = "-";
  document.getElementById('cellE198').innerHTML = "-";
  document.getElementById('cellE199').innerHTML = "-";
  document.getElementById('cellE200').innerHTML = "-";
  //Break
  if(Array1[0] != "bomb"){Array1[0] = 0;}
  if(Array1[1] != "bomb"){Array1[1] = 0;}
  if(Array1[2] != "bomb"){Array1[2] = 0;}
  if(Array1[3] != "bomb"){Array1[3] = 0;}
  if(Array1[4] != "bomb"){Array1[4] = 0;}
  if(Array1[5] != "bomb"){Array1[5] = 0;}
  if(Array1[6] != "bomb"){Array1[6] = 0;}
  if(Array1[7] != "bomb"){Array1[7] = 0;}
  if(Array1[8] != "bomb"){Array1[8] = 0;}
  if(Array1[9] != "bomb"){Array1[9] = 0;}
  if(Array1[10] != "bomb"){Array1[10] = 0;}
  if(Array1[11] != "bomb"){Array1[11] = 0;}
  if(Array1[12] != "bomb"){Array1[12] = 0;}
  if(Array1[13] != "bomb"){Array1[13] = 0;}
  if(Array1[14] != "bomb"){Array1[14] = 0;}
  if(Array1[15] != "bomb"){Array1[15] = 0;}
  if(Array1[16] != "bomb"){Array1[16] = 0;}
  if(Array1[17] != "bomb"){Array1[17] = 0;}
  if(Array1[18] != "bomb"){Array1[18] = 0;}
  if(Array1[19] != "bomb"){Array1[19] = 0;}
  if(Array2[0] != "bomb"){Array2[0] = 0;}
  if(Array2[1] != "bomb"){Array2[1] = 0;}
  if(Array2[2] != "bomb"){Array2[2] = 0;}
  if(Array2[3] != "bomb"){Array2[3] = 0;}
  if(Array2[4] != "bomb"){Array2[4] = 0;}
  if(Array2[5] != "bomb"){Array2[5] = 0;}
  if(Array2[6] != "bomb"){Array2[6] = 0;}
  if(Array2[7] != "bomb"){Array2[7] = 0;}
  if(Array2[8] != "bomb"){Array2[8] = 0;}
  if(Array2[9] != "bomb"){Array2[9] = 0;}
  if(Array2[10] != "bomb"){Array2[10] = 0;}
  if(Array2[11] != "bomb"){Array2[11] = 0;}
  if(Array2[12] != "bomb"){Array2[12] = 0;}
  if(Array2[13] != "bomb"){Array2[13] = 0;}
  if(Array2[14] != "bomb"){Array2[14] = 0;}
  if(Array2[15] != "bomb"){Array2[15] = 0;}
  if(Array2[16] != "bomb"){Array2[16] = 0;}
  if(Array2[17] != "bomb"){Array2[17] = 0;}
  if(Array2[18] != "bomb"){Array2[18] = 0;}
  if(Array2[19] != "bomb"){Array2[19] = 0;}
  if(Array3[0] != "bomb"){Array3[0] = 0;}
  if(Array3[1] != "bomb"){Array3[1] = 0;}
  if(Array3[2] != "bomb"){Array3[2] = 0;}
  if(Array3[3] != "bomb"){Array3[3] = 0;}
  if(Array3[4] != "bomb"){Array3[4] = 0;}
  if(Array3[5] != "bomb"){Array3[5] = 0;}
  if(Array3[6] != "bomb"){Array3[6] = 0;}
  if(Array3[7] != "bomb"){Array3[7] = 0;}
  if(Array3[8] != "bomb"){Array3[8] = 0;}
  if(Array3[9] != "bomb"){Array3[9] = 0;}
  if(Array3[10] != "bomb"){Array3[10] = 0;}
  if(Array3[11] != "bomb"){Array3[11] = 0;}
  if(Array3[12] != "bomb"){Array3[12] = 0;}
  if(Array3[13] != "bomb"){Array3[13] = 0;}
  if(Array3[14] != "bomb"){Array3[14] = 0;}
  if(Array3[15] != "bomb"){Array3[15] = 0;}
  if(Array3[16] != "bomb"){Array3[16] = 0;}
  if(Array3[17] != "bomb"){Array3[17] = 0;}
  if(Array3[18] != "bomb"){Array3[18] = 0;}
  if(Array3[19] != "bomb"){Array3[19] = 0;}
  if(Array4[0] != "bomb"){Array4[0] = 0;}
  if(Array4[1] != "bomb"){Array4[1] = 0;}
  if(Array4[2] != "bomb"){Array4[2] = 0;}
  if(Array4[3] != "bomb"){Array4[3] = 0;}
  if(Array4[4] != "bomb"){Array4[4] = 0;}
  if(Array4[5] != "bomb"){Array4[5] = 0;}
  if(Array4[6] != "bomb"){Array4[6] = 0;}
  if(Array4[7] != "bomb"){Array4[7] = 0;}
  if(Array4[8] != "bomb"){Array4[8] = 0;}
  if(Array4[9] != "bomb"){Array4[9] = 0;}
  if(Array4[10] != "bomb"){Array4[10] = 0;}
  if(Array4[11] != "bomb"){Array4[11] = 0;}
  if(Array4[12] != "bomb"){Array4[12] = 0;}
  if(Array4[13] != "bomb"){Array4[13] = 0;}
  if(Array4[14] != "bomb"){Array4[14] = 0;}
  if(Array4[15] != "bomb"){Array4[15] = 0;}
  if(Array4[16] != "bomb"){Array4[16] = 0;}
  if(Array4[17] != "bomb"){Array4[17] = 0;}
  if(Array4[18] != "bomb"){Array4[18] = 0;}
  if(Array4[19] != "bomb"){Array4[19] = 0;}
  if(Array5[0] != "bomb"){Array5[0] = 0;}
  if(Array5[1] != "bomb"){Array5[1] = 0;}
  if(Array5[2] != "bomb"){Array5[2] = 0;}
  if(Array5[3] != "bomb"){Array5[3] = 0;}
  if(Array5[4] != "bomb"){Array5[4] = 0;}
  if(Array5[5] != "bomb"){Array5[5] = 0;}
  if(Array5[6] != "bomb"){Array5[6] = 0;}
  if(Array5[7] != "bomb"){Array5[7] = 0;}
  if(Array5[8] != "bomb"){Array5[8] = 0;}
  if(Array5[9] != "bomb"){Array5[9] = 0;}
  if(Array5[10] != "bomb"){Array5[10] = 0;}
  if(Array5[11] != "bomb"){Array5[11] = 0;}
  if(Array5[12] != "bomb"){Array5[12] = 0;}
  if(Array5[13] != "bomb"){Array5[13] = 0;}
  if(Array5[14] != "bomb"){Array5[14] = 0;}
  if(Array5[15] != "bomb"){Array5[15] = 0;}
  if(Array5[16] != "bomb"){Array5[16] = 0;}
  if(Array5[17] != "bomb"){Array5[17] = 0;}
  if(Array5[18] != "bomb"){Array5[18] = 0;}
  if(Array5[19] != "bomb"){Array5[19] = 0;}
  if(Array6[0] != "bomb"){Array6[0] = 0;}
  if(Array6[1] != "bomb"){Array6[1] = 0;}
  if(Array6[2] != "bomb"){Array6[2] = 0;}
  if(Array6[3] != "bomb"){Array6[3] = 0;}
  if(Array6[4] != "bomb"){Array6[4] = 0;}
  if(Array6[5] != "bomb"){Array6[5] = 0;}
  if(Array6[6] != "bomb"){Array6[6] = 0;}
  if(Array6[7] != "bomb"){Array6[7] = 0;}
  if(Array6[8] != "bomb"){Array6[8] = 0;}
  if(Array6[9] != "bomb"){Array6[9] = 0;}
  if(Array6[10] != "bomb"){Array6[10] = 0;}
  if(Array6[11] != "bomb"){Array6[11] = 0;}
  if(Array6[12] != "bomb"){Array6[12] = 0;}
  if(Array6[13] != "bomb"){Array6[13] = 0;}
  if(Array6[14] != "bomb"){Array6[14] = 0;}
  if(Array6[15] != "bomb"){Array6[15] = 0;}
  if(Array6[16] != "bomb"){Array6[16] = 0;}
  if(Array6[17] != "bomb"){Array6[17] = 0;}
  if(Array6[18] != "bomb"){Array6[18] = 0;}
  if(Array6[19] != "bomb"){Array6[19] = 0;}
  if(Array7[0] != "bomb"){Array7[0] = 0;}
  if(Array7[1] != "bomb"){Array7[1] = 0;}
  if(Array7[2] != "bomb"){Array7[2] = 0;}
  if(Array7[3] != "bomb"){Array7[3] = 0;}
  if(Array7[4] != "bomb"){Array7[4] = 0;}
  if(Array7[5] != "bomb"){Array7[5] = 0;}
  if(Array7[6] != "bomb"){Array7[6] = 0;}
  if(Array7[7] != "bomb"){Array7[7] = 0;}
  if(Array7[8] != "bomb"){Array7[8] = 0;}
  if(Array7[9] != "bomb"){Array7[9] = 0;}
  if(Array7[10] != "bomb"){Array7[10] = 0;}
  if(Array7[11] != "bomb"){Array7[11] = 0;}
  if(Array7[12] != "bomb"){Array7[12] = 0;}
  if(Array7[13] != "bomb"){Array7[13] = 0;}
  if(Array7[14] != "bomb"){Array7[14] = 0;}
  if(Array7[15] != "bomb"){Array7[15] = 0;}
  if(Array7[16] != "bomb"){Array7[16] = 0;}
  if(Array7[17] != "bomb"){Array7[17] = 0;}
  if(Array7[18] != "bomb"){Array7[18] = 0;}
  if(Array7[19] != "bomb"){Array7[19] = 0;}
  if(Array8[0] != "bomb"){Array8[0] = 0;}
  if(Array8[1] != "bomb"){Array8[1] = 0;}
  if(Array8[2] != "bomb"){Array8[2] = 0;}
  if(Array8[3] != "bomb"){Array8[3] = 0;}
  if(Array8[4] != "bomb"){Array8[4] = 0;}
  if(Array8[5] != "bomb"){Array8[5] = 0;}
  if(Array8[6] != "bomb"){Array8[6] = 0;}
  if(Array8[7] != "bomb"){Array8[7] = 0;}
  if(Array8[8] != "bomb"){Array8[8] = 0;}
  if(Array8[9] != "bomb"){Array8[9] = 0;}
  if(Array8[10] != "bomb"){Array8[10] = 0;}
  if(Array8[11] != "bomb"){Array8[11] = 0;}
  if(Array8[12] != "bomb"){Array8[12] = 0;}
  if(Array8[13] != "bomb"){Array8[13] = 0;}
  if(Array8[14] != "bomb"){Array8[14] = 0;}
  if(Array8[15] != "bomb"){Array8[15] = 0;}
  if(Array8[16] != "bomb"){Array8[16] = 0;}
  if(Array8[17] != "bomb"){Array8[17] = 0;}
  if(Array8[18] != "bomb"){Array8[18] = 0;}
  if(Array8[19] != "bomb"){Array8[19] = 0;}
  if(Array9[0] != "bomb"){Array9[0] = 0;}
  if(Array9[1] != "bomb"){Array9[1] = 0;}
  if(Array9[2] != "bomb"){Array9[2] = 0;}
  if(Array9[3] != "bomb"){Array9[3] = 0;}
  if(Array9[4] != "bomb"){Array9[4] = 0;}
  if(Array9[5] != "bomb"){Array9[5] = 0;}
  if(Array9[6] != "bomb"){Array9[6] = 0;}
  if(Array9[7] != "bomb"){Array9[7] = 0;}
  if(Array9[8] != "bomb"){Array9[8] = 0;}
  if(Array9[9] != "bomb"){Array9[9] = 0;}
  if(Array9[10] != "bomb"){Array9[10] = 0;}
  if(Array9[11] != "bomb"){Array9[11] = 0;}
  if(Array9[12] != "bomb"){Array9[12] = 0;}
  if(Array9[13] != "bomb"){Array9[13] = 0;}
  if(Array9[14] != "bomb"){Array9[14] = 0;}
  if(Array9[15] != "bomb"){Array9[15] = 0;}
  if(Array9[16] != "bomb"){Array9[16] = 0;}
  if(Array9[17] != "bomb"){Array9[17] = 0;}
  if(Array9[18] != "bomb"){Array9[18] = 0;}
  if(Array9[19] != "bomb"){Array9[19] = 0;}
  if(Array10[0] != "bomb"){Array10[0] = 0;}
  if(Array10[1] != "bomb"){Array10[1] = 0;}
  if(Array10[2] != "bomb"){Array10[2] = 0;}
  if(Array10[3] != "bomb"){Array10[3] = 0;}
  if(Array10[4] != "bomb"){Array10[4] = 0;}
  if(Array10[5] != "bomb"){Array10[5] = 0;}
  if(Array10[6] != "bomb"){Array10[6] = 0;}
  if(Array10[7] != "bomb"){Array10[7] = 0;}
  if(Array10[8] != "bomb"){Array10[8] = 0;}
  if(Array10[9] != "bomb"){Array10[9] = 0;}
  if(Array10[10] != "bomb"){Array10[10] = 0;}
  if(Array10[11] != "bomb"){Array10[11] = 0;}
  if(Array10[12] != "bomb"){Array10[12] = 0;}
  if(Array10[13] != "bomb"){Array10[13] = 0;}
  if(Array10[14] != "bomb"){Array10[14] = 0;}
  if(Array10[15] != "bomb"){Array10[15] = 0;}
  if(Array10[16] != "bomb"){Array10[16] = 0;}
  if(Array10[17] != "bomb"){Array10[17] = 0;}
  if(Array10[18] != "bomb"){Array10[18] = 0;}
  if(Array10[19] != "bomb"){Array10[19] = 0;}
  RandomizeTime();
  Score = 0;
}

function GameoverLose()
{
  window.alert("BOOM! \nGame Over. \nPress Flip to reset.");
  ResetTime();
}

function ScoreTime()
{
  document.getElementById('Score').disabled = false;
  Score = Score + 1;
  if(Score < 160)
  {
    document.getElementById('Score').value = Score;
    document.getElementById('Score').innerHTML = Score;
    document.getElementById('Score').disabled = true;
  }
  else
  {
    document.getElementById('Score').value = Score;
    document.getElementById('Score').innerHTML = Score;
    document.getElementById('Score').disabled = true;
    window.alert("You Win!");
    ResetTime();
  }
}
