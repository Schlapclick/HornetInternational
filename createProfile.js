document.addEventListener('DOMContentLoaded', () => 
{
    //call this a rough draft, I suspect something will break when we merge it
    const form = document.getElementById('form');

    //this is where I'll add the other settings when we decide on them
    const profile = 
    {
        language: "English",
        username: "",
        password: "",
        email: ""
    };
    form.addEventListener('submit', function(event)
    {
        event.preventDefault();
        profile.username = document.getElementById('username').value;
        profile.password = document.getElementById('password').value;
        profile.email = document.getElementById('email').value;

        //here's the email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
        {
            alert('Please enter a valid csus email address');
            return;
        }
        const emailDomain = email.split('@')[1];
        if (emailDomain!== 'csus.edu')
        {
            alert('Please enter a valid csus email address');
            return;
        }
        //need to add a link to the database here, store the profile
    });
});