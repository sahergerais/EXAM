const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
    alertPlaceholder.innerHTML = ''; 

    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

const alertBtn = document.getElementById('liveAlertBtn');

if (alertBtn) {
    alertBtn.addEventListener('click', () => {
        appendAlert('Success! I will Contact you soon.', 'success');
    })
}
