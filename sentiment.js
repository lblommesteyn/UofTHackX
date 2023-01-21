import axios from 'axios';
function sentiment(text){
    const options = {
    method: 'POST',
    url: 'https://api.cohere.ai/classify',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer kenKGGv8CbudCkg0xQTakC5LwL4lrcNTALj3quJU'
    },
    data: {
        inputs: ['Confirm your email address', 'hey i need u to send some $'],
        examples: [{ Text: "We are committed to creating an inclusive and diverse workplace where all employees feel valued and respected.", Label: "positive" },
        { Text: "We strive to eliminate discrimination and promote equal opportunities for all individuals.", Label: "positive" },
        { Text: "We aim to provide a safe and welcoming environment for all employees, regardless of their background or identity.", Label: "positive" },
        { Text: "We value the unique perspectives and contributions of all employees and actively seek to foster a culture of inclusivity.", Label: "positive" },
        { Text: "We are dedicated to promoting a culture of respect, tolerance, and understanding.", Label: "positive" },
        { Text: "We believe that diversity and inclusivity are essential for driving innovation and growth in our company.", Label: "positive" },
        { Text: "We are committed to creating an environment where all employees can be their authentic selves.", Label: "positive" },
        { Text: "We recognize the importance of providing accommodations and resources for employees with disabilities.", Label: "positive" },
        { Text: "We support and encourage the professional development of all employees, regardless of their background or identity.", Label: "positive" },
        { Text: "We are committed to creating a culture of fairness and equality for all employees.", Label: "positive" },
        { Text: "We actively work to eliminate bias and discrimination in our hiring, promotion, and retention practices.", Label: "positive" },
        { Text: "We believe in the power of diversity and inclusivity to drive creativity and success in our company.", Label: "positive" },
        { Text: "We are dedicated to creating a culture of empathy and understanding for all employees.", Label: "positive" },
        { Text: "We strive to create a workplace where all employees feel supported and encouraged to bring their full selves to work.", Label: "positive" },
        { Text: "We are committed to providing opportunities for all employees to participate in training and development programs.", Label: "positive" },
        { Text: "We actively work to create a culture of collaboration and teamwork, where all employees feel valued and respected.", Label: "positive" },
        { Text: "We believe that promoting a culture of inclusivity and diversity is essential for achieving our company's mission.", Label: "positive" },
        { Text: "We are committed to creating an environment where all employees can thrive and succeed.", Label: "positive" },
        { Text: "We recognize the importance of addressing and eliminating unconscious bias in our workplace.", Label: "positive" },
        { Text: "We strive to create a workplace where all employees feel a sense of belonging and are treated with dignity and respect.", Label: "positive" },
        { Text: "Exciting news! We just launched our new website, check it out and let us know what you think #newwebsite #technology #innovation", Label: "neutral" },
        { Text: "Our team is growing! We're hiring for multiple positions in software development, marketing, and sales. Apply now! #careers #technology #growth", Label: "neutral" },
        { Text: "Just finished demoing our latest product at a trade show, the feedback has been amazing! #newproduct #technology #success", Label: "neutral" },
        { Text: "We're proud to announce that we've been named one of the top companies in our industry for the second year in a row! #award #technology #leadership", Label: "neutral"}
        ],
        truncate: 'END'
    }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
 }