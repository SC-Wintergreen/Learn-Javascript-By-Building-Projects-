const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

// clearUI();

const onGenerateSubmit = (e) => {
    
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    const colorDark = document.getElementById('color').value;

    console.log(url, size, colorDark);

    if (url === '')
        alert('Input Field Cannot Be Empty');
    else {
        
        showSpinner();

        setTimeout(() => {

            hideSpinner();
            generateQRCode(url, size, colorDark);
            
            setTimeout(() => {
                const saveURL = qr.querySelector('img').src;
                createSaveBtn(saveURL);
            }, 1000);
            
        }, 3000);
    }
    
};

const generateQRCode=(url, size, colorDark)=>
{
    
    const qrCode = new QRCode('qrcode',{text:url,width:size,height:size,colorDark:colorDark})
}

const showSpinner = () => {
    
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {

    qr.innerHTML = '';

    const saveBtn = document.getElementById('save-link');

    if (saveBtn)
        saveLink.remove();
    
}

const createSaveBtn = (saveURL) => {

    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-blue-800 hover:bg-amber-400 hover:text-blue-800 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
    
}

hideSpinner();
form.addEventListener('submit', onGenerateSubmit);

