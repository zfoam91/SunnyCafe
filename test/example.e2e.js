// test/example.e2e.js
describe('My Web App', () => {
    before(() => {
        // This runs before all tests
        browser.url('file://'); // Adjust the URL as needed
    });

    it('should load the homepage and check the title', () => {
        const title = browser.getTitle();
        expect(title).toBe('Sunny Café'); // Adjust to your expected title
    });

    it('should display the menu correctly', () => {
        const menuItems = $$('ul.menu li'); // Assuming your menu items are in an unordered list
        expect(menuItems.length).toBeGreaterThan(0); // Check that menu items are displayed
    });

    it('should show contact information', () => {
        const contactSection = $('#contact');
        expect(contactSection.isDisplayed()).toBe(true);
        expect(contactSection.getText()).toContain('Email: example@example.com'); // Replace with your email
        expect(contactSection.getText()).toContain('Phone: 123-456-7890'); // Replace with your phone number
    });

    it('should validate the email field in the contact form', () => {
        const emailInput = $('#email'); // Replace with your actual input field selector
        emailInput.setValue('invalid-email');
        const submitButton = $('#submit'); // Replace with your actual submit button selector
        submitButton.click();

        const errorMessage = $('.error-message'); // Replace with your actual error message selector
        expect(errorMessage.isDisplayed()).toBe(true);
        expect(errorMessage.getText()).toContain('Please enter a valid email address');
    });

    it('should validate the message field in the contact form', () => {
        const messageInput = $('#message'); // Replace with your actual message field selector
        messageInput.setValue(''); // Leave empty
        const submitButton = $('#submit'); // Replace with your actual submit button selector
        submitButton.click();

        const errorMessage = $('.error-message'); // Replace with your actual error message selector
        expect(errorMessage.isDisplayed()).toBe(true);
        expect(errorMessage.getText()).toContain('Message cannot be empty');
    });

    it('should submit the form successfully with valid input', () => {
        const emailInput = $('#email');
        const messageInput = $('#message');
        const submitButton = $('#submit');

        emailInput.setValue('valid.email@example.com');
        messageInput.setValue('Hello, this is a test message.');
        submitButton.click();

        // Check for success message or redirect after form submission
        const successMessage = $('.success-message'); // Replace with your actual success message selector
        expect(successMessage.isDisplayed()).toBe(true);
        expect(successMessage.getText()).toContain('Thank you for your message!'); // Adjust as needed
    });
});
