const inputFile = document.querySelector("#input_img");
const container = document.querySelector('.container');
const crop_container = document.querySelector('.crop_container');
const imgToCrop = document.querySelector(".imgToCrop");
const cropButton = document.querySelector(".crop-btn");
const display = document.querySelector('#img_src');
const filtering = document.querySelector('.apply-filter');
const filter_img = document.querySelector('.filtered-img');
const submit = document.querySelector(".submit");
let cropper = "";

inputFile.addEventListener('change', e => {
    container.classList.add('hidden');
    crop_container.classList.remove('hidden');
    if (e.target.files.length) {
        // start file reader
        const reader = new FileReader();
        reader.onload = e => {
            if (e.target.result) {
                //create new image
                let img = document.createElement('img');
                img.id = 'image';
                img.classList.add('img_scrToCrop')
                img.src = e.target.result;
                //clean result befor
                imgToCrop.innerHTML = '';
                //append new image
                imgToCrop.appendChild(img);
                // show save btn and options

                cropper = new Cropper(img);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
});

let imgSrc = '';
cropButton.addEventListener('click', e => {
    crop_container.classList.add('hidden');
    container.classList.remove('hidden');
    filtering.classList.remove('hidden');
    e.preventDefault();
    imgSrc = cropper.getCroppedCanvas({}).toDataURL();
    filter_img.src = imgSrc;
})

submit.addEventListener('click', e => {
    filtering.classList.add('hidden');
    e.preventDefault();
    display.src = imgSrc;
})

//filter buttons

// Circle 
const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    e.preventDefault();
    filter_img.classList.add('circle_style');
    display.classList.add('circle_style');
});

// Rectangle

// Square

// Heart

// Orignal