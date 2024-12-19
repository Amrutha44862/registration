$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        let isValid = true;

        $('input, select, textarea').each(function () {
            if ($(this).val().trim() === '') {
                alert('Please fill out all fields.');
                isValid = false;
                return false;
            }
        });

        return isValid;
    });
});