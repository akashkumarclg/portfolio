var myIndex = 0;
      imgslide1();

      function imgslide1()
      {
          var i;
          var x = document.getElementsByClassName("slide1");

          for (i = 0; i < x.length; i++)
          {
              x[i].style.display = "none";  
          }
            myIndex++;
            if (myIndex > x.length)
            {
              myIndex = 1;
            }    
              x[myIndex-1].style.display = "block";  
              setTimeout(imgslide1, 6000); 
      }