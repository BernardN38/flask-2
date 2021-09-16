/** processForm: get data from form and make AJAX call to our API. */

async function processForm(event) {
    event.preventDefault();
    let formData = {
        name: $('#name').val(),
        year: $('#year').val(),
        email: $('#email').val(),
        color:$('#color').val()
    }
    console.log(formData)
    let res = await axios.get('/api/get-lucky-num', {params:formData})
    handleResponse(res.data)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    console.log(resp.data)
    $('#lucky-results').html(
        `Your lucky number is ${resp.data.num.num} (${resp.data.num.fact}). <br>
        Your birth year (${resp.data.year.year}) fact is ${resp.data.year.fact}.`
    )
}


$("#lucky-form").on("submit", processForm);
