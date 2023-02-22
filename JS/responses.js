function getBotResponse(input) {
    // buying a car reponses
    console.log(input)
    // Simple responses
    if (input == "hello" || input == "Hello") {
        return "Hello there! How can I help you today? ";
    } else if (input == "goodbye" || input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "good" || input == "Good") {
        return "That is good , How may I help you today ?";
    }
    else if (input == "bad" || input == "Bad") {
        return "awe I'm sorry to hear that  , How may I help you today ?";
    }

//  questions
   else if (input == "How do i buy a car?" || input == "how do i buy a car?" || input == "How do I buy a car?" || input =="how do I buy a car?"
        ||input == "How do i buy a car" || input == "how do i buy a car" || input == "How do I buy a car" || input =="how do I buy a car") {
        return "You would go to the home page or go to our sales page";
    } else if (input == "where can i buy a car at" || input== "Where can i buy a car at" || input == "Where can I buy a car at"
        ||input == "where can i buy a car at?" || input== "Where can i buy a car at?" || input == "Where can I buy a car at?") {
        return "You would go to the home page or go to our sales page";
    }
    else if (input == "where can i find the about us page" || input =="Where can i find the about us page" || input =="Where can I find the about us page"
        ||input == "where can i find the about us page?" || input =="Where can i find the about us page?" || input =="Where can I find the about us page?") {
        return "You can find the About Us page in the top left of the page saying About ";
    } else if (input == "blue" || input == "Blue") {
        return "We have ";
    } else if (input == "red" || input == "Red") {
        return "We have  of this color car";
    }
    else if (input == "green" || input == "Green") {
        return "We have  of this color car";
    }
    else if (input == "purple" || input == "Purple") {
        return "We have  of this color car";
    }
    else if (input == "black" || input == "Black") {
        return "We have  of this color car";
    }
    else if (input == "Car Colors" || input == "car colors") {
        return "We currently have Red,Blue,Green,Purple and black color cars";
    }
    else if (input == "What kind of cars do you guys have?" || input == "what kind of cars do you guys have?" || 
        input == "What kind of cars do you guys have" || input == "what kind of cars do you guys have") {
        return "We currently have Ford,Tesla,Mercedes,BMW, Mazda,Toyota,Honda,Range Rover,Lincoln,Audi,Subaru,Ram,Lexus,Volvo,";
    } 
     else if (input == "how do i use the finance calculator" || input == "How do i use the finance calculator" || input == "How do I use the finance calculator"||
        input == "how do I use the finance calculator" || input == "how do i use the finance calculator?" || input == "How do i use the finance calculator?" || 
        input == "How do I use the finance calculator?"|| input == "how do I use the finance calculator?") {
        return "for the Amount (type in your loan amount), for interest rate(type in your interest rate of the loan), for the Monthly amount(type in how many months you would like to finance the loan)";
    }
    



    else {
        return "Try asking something else!" + " (Like car colors: How  do I buy a car?)";
    }

}