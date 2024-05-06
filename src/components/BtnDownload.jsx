import React from 'react';

const DownloadPDF = ({ base64String, fileName }) => {
  const downloadPDF = () => {
    // Converte a string base64 para um array de bytes
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Cria um objeto Blob com o array de bytes e o tipo MIME do PDF
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // Cria um link temporário para o Blob
    const url = URL.createObjectURL(blob);

    // Cria um link <a> para o Blob temporário e simula um clique para baixar
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    // Limpa o link temporário e o objeto Blob
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <a onClick={downloadPDF} className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none hover:cursor-pointer'>
      Baixar CV
    </a>
  );
};

export default DownloadPDF;
