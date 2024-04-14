// controller.js

const { postCard, getAllCards } = require('./model');
const { addCards } = require('./view');

const submitForm = () => {
    console.log("Form submitted");
    let formData = {
        title: $('#title').val(),
        movie: $('#movie').val(), 
        path: $('#link').val(),   
        description: $('#description').val()
    };

    console.log(formData);

    postCard(formData)
        .then(result => {
            if (result.statusCode === 201) {
                alert('Card posted successfully');
                getAllCards();
            }
        })
        .catch(error => {
            console.error(error);
            alert('Failed to post card');
        });
};

$(document).ready(function () {
    $('#formSubmit').click(() => {
        submitForm();
    });

    getAllCards();
});
