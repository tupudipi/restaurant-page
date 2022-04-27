export default function contactComponent(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
        <h2>Program</h2>
        <p>Monday - Friday: 10am - 6pm</p>
        <p>Saturday: 10am - 5pm</p>
        <p>Sunday: Deliveries Only</p>
    `;
    contact.appendChild(hours);

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    contactDetails.innerHTML = `
        <h2>Contacează-ne la</h2>
        <p>(123) 456-7890</p>
        <p>teriffAninoasa@gmail.com</p>
    `;
    contact.appendChild(contactDetails);

    const contactTitle = document.createElement('h2');
        contactTitle.innerHTML='Sau scrie-ne un mesaj';
        contact.appendChild(contactTitle);
    const contactForm = document.createElement('form');
        contactForm.setAttribute('action', '#');
        contactForm.setAttribute('method', 'post');

    const formGroup1 = document.createElement('div');
        formGroup1.classList.add('form-group');
    const formGroup1Label = document.createElement('label');
        formGroup1Label.innerHTML='Nume';
        formGroup1Label.setAttribute('for','name');
        formGroup1.appendChild(formGroup1Label);
    const formGroup1Input = document.createElement('input');
        formGroup1Input.type='text';
        formGroup1Input.placeholder='Nume';
        formGroup1Input.id='name';
        formGroup1Input.name='name';
        formGroup1.appendChild(formGroup1Input);

    const formGroup2 = document.createElement('div');
        formGroup2.classList.add('form-group');
    const formGroup2Label = document.createElement('label');
        formGroup2Label.innerHTML='Email';
        formGroup2Label.setAttribute('for','email');
        formGroup2.appendChild(formGroup2Label);
    const formGroup2Input = document.createElement('input');
        formGroup2Input.type='email';
        formGroup2Input.placeholder='Email';
        formGroup2Input.id='email';
        formGroup2Input.name='email';
        formGroup2.appendChild(formGroup2Input);

    const formGroup3 = document.createElement('div');
        formGroup3.classList.add('form-group');
    const formGroup3Label = document.createElement('label');
        formGroup3Label.innerHTML='Mesaj';
        formGroup3Label.setAttribute('for','message');
        formGroup3.appendChild(formGroup3Label);
    const formGroup3Input = document.createElement('textarea');
        formGroup3Input.placeholder='Mesaj';
        formGroup3Input.id='message';
        formGroup3Input.name='message';
        formGroup3.appendChild(formGroup3Input);

    const formButton = document.createElement('button');
        formButton.innerHTML='Trimite';
        formButton.type='submit';

    contactForm.appendChild(formGroup1);
    contactForm.appendChild(formGroup2);
    contactForm.appendChild(formGroup3);
    contactForm.appendChild(formButton);
    contact.appendChild(contactForm);

    return contact;
}   
