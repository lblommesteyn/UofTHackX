const request = require('request');
const cheerio = require('cheerio');



console.log("Loading sentiment.js");

function score( url ){
    data = sentimize(webScraper(url));
    var score = 0;
    for (var i = 0; i < data.length; i++) {
        if (sentiment(data[i]).localeCompare("positive")) score += sent_score(data[i]);
    }
    return score;
}

coHereTryCounter = 0;
function sentiment(text){
    
    //Cohere properties
    let cohere_props = {
        model: "large", 
        inputs: [text],
        examples: [{"text": "Exciting news! We just launched our new website, check it out and let us know what you think #newwebsite #technology #innovation", "label": "neutral"}, {"text": "Our team is growing! We\'re hiring for multiple positions in software development, marketing, and sales. Apply now! #careers #technology #growth", "label": "neutral"}, {"text": "Just finished demoing our latest product at a trade show, the feedback has been amazing! #newproduct #technology #success", "label": "neutral"}, {"text": "We\'re proud to announce that we\'ve been named one of the top companies in our industry for the second year in a row! #award #technology #leadership", "label": "neutral"}, {"text": "Our team is hard at work on the next big thing, stay tuned for updates! #innovation #technology #future", "label": "neutral"}, {"text": "Don\'t miss out on our upcoming webinar on the latest trends in [industry], register now! #webinar #technology #trends", "label": "neutral"}, {"text": "Exciting partnership announcement coming soon! Stay tuned for more information. #partnership #technology #collaboration", "label": "neutral"}, {"text": "We\'re thrilled to be a part of [event/conference], come visit us at our booth! #event #technology #networking", "label": "neutral"}, {"text": "We\'re always looking for ways to improve, check out our latest customer satisfaction survey results! #feedback #technology #improvement", "label": "neutral"}, {"text": "Our team is excited to be attending [industry event], looking forward to connecting with other leaders in the field. #event #technology #networking", "label": "neutral"}, {"text": "We\'re proud to support [charity/cause], learn more about our efforts on our website. #charity #technology #socialimpact", "label": "neutral"}, {"text": "We\'re excited to announce that our latest product is now available for purchase! #newproduct #technology #launch", "label": "neutral"}, {"text": "We\'re proud to be a part of the [industry association], working towards advancements in our field. #association #technology #advancement", "label": "neutral"}, {"text": "We\'re always looking for new ways to innovate, check out our latest R&D projects on our website. #innovation #technology #research", "label": "neutral"}, {"text": "We\'re excited to be a part of the [industry event], come learn more about our latest developments. #event #technology #innovation", "label": "neutral"}, {"text": "We\'re proud to be named a top company in customer service for the third year in a row! #award #technology #customerservice", "label": "neutral"}, {"text": "We\'re committed to being environmentally friendly, check out our sustainability efforts on our website. #environment #technology #sustainability", "label": "neutral"}, {"text": "We\'re thrilled to announce that we\'ve expanded to [new location], come visit us! #expansion #technology #growth", "label": "neutral"}, {"text": "We\'re excited to be a part of the [industry event], come learn more about our latest developments. #event #technology #innovation", "label": "neutral"}, {"text": "We\'re proud to support [charity/cause], learn more about our efforts on our website. #charity #technology #socialimpact", "label": "neutral"}, {"text": "We\'re excited to announce that our latest product is now available for purchase! #newproduct #technology #launch", "label": "neutral"}, {"text": "We\'re always looking for ways to improve, check out our latest customer satisfaction survey results! #feedback #technology #improvement", "label": "neutral"}, {"text": "We\'re proud to be a part of the [industry association], working towards advancements in our field. #association #technology #advancement", "label": "neutral"}, {"text": "Our team is excited to be attending [industry event], looking forward to connecting with other leaders in the field. #event #technology #networking", "label": "neutral"}, {"text": "Inclusion is how we unleash the power of diversity. We strive to foster belonging and empowerment at work. We create relevant marketing for our diverse customers. We listen and engage with our diverse communities. And we value teamwork with our diverse suppliers.", "label": "positive"}, {"text": "We are committed to creating an inclusive and diverse workplace where all employees feel valued and respected.", "label": "positive"}, {"text": "We strive to eliminate discrimination and promote equal opportunities for all individuals.", "label": "positive"}, {"text": "We aim to provide a safe and welcoming environment for all employees, regardless of their background or identity.", "label": "positive"}, {"text": "We value the unique perspectives and contributions of all employees and actively seek to foster a culture of inclusivity.", "label": "positive"}, {"text": "We are dedicated to promoting a culture of respect, tolerance, and understanding.", "label": "positive"}, {"text": "We believe that diversity and inclusivity are essential for driving innovation and growth in our company.", "label": "positive"}, {"text": "We are committed to creating an environment where all employees can be their authentic selves.", "label": "positive"}, {"text": "We recognize the importance of providing accommodations and resources for employees with disabilities.", "label": "positive"}, {"text": "We support and encourage the professional development of all employees, regardless of their background or identity.", "label": "positive"}, {"text": "We are committed to creating a culture of fairness and equality for all employees.", "label": "positive"}, {"text": "We actively work to eliminate bias and discrimination in our hiring, promotion, and retention practices.", "label": "positive"}, {"text": "We believe in the power of diversity and inclusivity to drive creativity and success in our company.", "label": "positive"}, {"text": "We are dedicated to creating a culture of empathy and understanding for all employees.", "label": "positive"}, {"text": "We strive to create a workplace where all employees feel supported and encouraged to bring their full selves to work.", "label": "positive"}, {"text": "We are committed to providing opportunities for all employees to participate in training and development programs.", "label": "positive"}, {"text": "We actively work to create a culture of collaboration and teamwork, where all employees feel valued and respected.", "label": "positive"}, {"text": "We believe that promoting a culture of inclusivity and diversity is essential for achieving our company\'s mission.", "label": "positive"}, {"text": "We are committed to creating an environment where all employees can thrive and succeed.", "label": "positive"}, {"text": "We recognize the importance of addressing and eliminating unconscious bias in our workplace.", "label": "positive"}, {"text": "We strive to create a workplace where all employees feel a sense of belonging and are treated with dignity and respect.", "label": "positive"}]   
    }

    //setting up cohere request
    let cohereRequest = new XMLHttpRequest();
    cohereRequest.open("POST", "https://api.cohere.ai/classify");
    cohereRequest.setRequestHeader("Content-Type", "application/json");
    cohereRequest.setRequestHeader("Accept", "application/json");
    cohereRequest.setRequestHeader("Authorization", "Bearer kenKGGv8CbudCkg0xQTakC5LwL4lrcNTALj3quJU");
    cohereRequest.setRequestHeader("Cohere-Version", "2021-11-08");
    
    //Sending request
    cohereRequest.onreadystatechange = () => {
        if (cohereRequest.readyState == 4) {
            if (cohereRequest.status != 200) {
                if (coHereTryCounter <= 5) {
                    setTimeout((text) => {
                        coHereTryCounter++;
                        console.log("CoHere's request didn't work! Trying for the " + coHereTryCounter + "th time");
                        sentiment(text);
                    }, 10000);
                } else {
                    alert("CoHere didn't work! Try again...");
                    location.reload();
                }
            } else {
                return onResponseFromCohere(cohereRequest.responseText);
            }
        }
    }; 

    
    let paramsAsJSON = JSON.stringify(cohere_props);
    cohereRequest.send(paramsAsJSON);
}
// function to handle response from cohere
function onResponseFromCohere(response){
    let result = JSON.parse(response).classifications[0].prediction;
    console.log(result);

    return result
}
function sentimize(paragraphs) {
    let result =[];
    for (let i = 0; i < paragraphs.length; i++) {
        result.push(sentiment(paragraphs[i]));
    }

}

function webScraper(url) {
    request(url, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            let paragraphs = $('p').toArray().map(el => $(el).text());
            console.log(paragraphs);
        }
    });
}

