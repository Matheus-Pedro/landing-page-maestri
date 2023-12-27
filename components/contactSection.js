export default function ContactSection(){
    return(
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or questions.</p>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="submit">Submit</button>
        </form>
    </section>
    );
}