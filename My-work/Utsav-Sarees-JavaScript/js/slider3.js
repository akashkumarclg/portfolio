var l= 0;
      imgslide3();

      function imgslide3()
      {
          var i;
          var x = document.getElementsByClassName("slide3");

          for (i = 0; i < x.length; i++)
          {
              x[i].style.display = "none";  
          }
            l++;
            if (l > x.length)
            {
              l = 1;
            }    
              x[l-1].style.display = "block";  
              setTimeout(imgslide3, 4000); 
      }