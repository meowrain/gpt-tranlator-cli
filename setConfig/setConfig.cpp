#include <iostream>
#include <fstream>
#include <string>
int main(void) {
    std::string apiUrl,apiKey;
    std::cout << "Enter your OpenAI API URL: ";
    std::getline(std::cin,apiUrl);
    std::cout << "Enter your OpenAI API Key: ";
    std::getline(std::cin,apiKey);
    
    std::ofstream configFile("../config/openai_config.json");
    if(configFile.is_open()) {
        configFile << "{\n";
        configFile << "    \"OPENAI_API_URL\": \"" << apiUrl << "/v1/chat/completions\",\n";
        configFile << "    \"OPENAI_API_KEY\": \"" << apiKey << "\"\n";
        configFile << "}\n";
        configFile.close();
        std::cout << "Config update successfully!" << std::endl;
    } else {
        std::cerr <<  "Failed to open the json file." << std::endl;
    }
    return 0;
}