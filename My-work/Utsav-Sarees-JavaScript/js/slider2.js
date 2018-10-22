var k= 0;
      imgslide2();

      function imgslide2()
      {
          var i;
          var x = document.getElementsByClassName("slider2");

          for (i = 0; i < x.length; i++)
          {
              x[i].style.display = "none";  
          }
            k++;
            if (k > x.length)
            {
              k = 1;
            }    
              x[k-1].style.display = "block";  
              setTimeout(imgslide2, 4000); 
      }