var ProductImg = document.getElementById("ProductImg");

      // Obtém uma coleção de elementos com a classe "SmallImg"
      var SmallImg = document.getElementsByClassName("SmallImg");

      // Define um manipulador de eventos para o clique no primeiro elemento da coleção SmallImg
      SmallImg[0].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do primeiro elemento da coleção SmallImg
        ProductImg.src = SmallImg[0].src;
      }

      // Define um manipulador de eventos para o clique no segundo elemento da coleção SmallImg
      SmallImg[1].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do segundo elemento da coleção SmallImg
        ProductImg.src = SmallImg[1].src;
      }

      // Define um manipulador de eventos para o clique no terceiro elemento da coleção SmallImg
      SmallImg[2].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do terceiro elemento da coleção SmallImg
        ProductImg.src = SmallImg[2].src;
      }

      // Define um manipulador de eventos para o clique no quarto elemento da coleção SmallImg
      SmallImg[3].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do quarto elemento da coleção SmallImg
        ProductImg.src = SmallImg[3].src;
      }