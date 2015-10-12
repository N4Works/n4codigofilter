;
(function(ng) {
  "use strict";

  ng
    .module('n4CodigoFilter', [])
    .filter('Codigo', function() {
      return function(codigo, tamanho, caractere) {
        if (!codigo) {
          return '';
        }

        if (isNaN(codigo)) {
          return codigo;
        }

        codigo = codigo.toString().trim();

        tamanho = tamanho || 6;
        caractere = caractere || '0';

        while (codigo.length < tamanho) {
          codigo = caractere + codigo;
        }

        return codigo;
      };
    });
}(angular));
