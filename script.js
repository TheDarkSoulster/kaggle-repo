// Mock data for demonstration
const datasets = [
    {
        title: "Deforestation dataset",
        description: "A dataset showing Deforestation rates for each country.",
        url: "https://www.kaggle.com/datasets/konradb/deforestation-dataset",
        featured: true
    },
    {
        title: "Sustainable Development Data up to 2023",
        description: "Global Trends in Sustainable Development Goals: 2000 to 2023.",
        url: "https://www.kaggle.com/datasets/sazidthe1/sustainable-development-report",
        featured: true
    },
    {
        title: "MNIST - Handwritten Digits",
        description: "A dataset for image classification tasks with handwritten digits.",
        url: "https://www.kaggle.com/c/digit-recognizer/data",
        featured: false
    },
    {
        title: "COVID-19 Open Research Dataset",
        description: "A dataset with COVID-19 related research papers.",
        url: "https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge",
        featured: false
    },
    {
        title: "IMDB - Movie Reviews Sentiment Analysis",
        description: "A dataset for binary sentiment analysis on movie reviews.",
        url: "https://www.kaggle.com/utathya/imdb-review-dataset",
        featured: false
    },
    {
        title: "Iris Flower Dataset",
        description: "A classic dataset for pattern recognition, often used in machine learning tutorials.",
        url: "https://www.kaggle.com/uciml/iris",
        featured: false
    },
    {
        title: "Wine Quality Dataset",
        description: "A dataset for predicting the quality of wine based on physicochemical tests.",
        url: "https://www.kaggle.com/uciml/red-wine-quality-cortez-et-al-2009",
        featured: false
    },
    {
        title: "Credit Card Fraud Detection",
        description: "A dataset for anomaly detection, focusing on identifying fraudulent credit card transactions.",
        url: "https://www.kaggle.com/mlg-ulb/creditcardfraud",
        featured: false
    },
    {
        title: "Breast Cancer Wisconsin (Diagnostic) Dataset",
        description: "A dataset for binary classification to predict if a tumor is benign or malignant.",
        url: "https://www.kaggle.com/uciml/breast-cancer-wisconsin-data",
        featured: false
    },
    {
        title: "New York City Taxi Fare Prediction",
        description: "A dataset for regression tasks focused on predicting taxi fares in NYC.",
        url: "https://www.kaggle.com/c/new-york-city-taxi-fare-prediction",
        featured: false
    },
    {
        title: "Pima Indians Diabetes Database",
        description: "A dataset for predicting diabetes in a population based on health factors.",
        url: "https://www.kaggle.com/uciml/pima-indians-diabetes-database",
        featured: false
    },
    {
        title: "Global Temperature Time Series",
        description: "A dataset for analyzing global temperature trends over time.",
        url: "https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data",
        featured: false
    },
    {
        title: "Human Activity Recognition with Smartphones",
        description: "A dataset for classification tasks focused on human activity recognition.",
        url: "https://www.kaggle.com/uciml/human-activity-recognition-with-smartphones",
        featured: false
    },
    {
        title: "Heart Disease UCI",
        description: "A dataset for binary classification to predict the presence of heart disease.",
        url: "https://www.kaggle.com/ronitf/heart-disease-uci",
        featured: false
    }
];

// Function to display datasets
function displayDatasets() {
    const datasetContainer = document.getElementById('datasets');
    const featuredContainer = document.getElementById('featured-datasets');
    
    datasets.forEach(dataset => {
        const datasetItem = document.createElement('div');
        datasetItem.className = 'dataset-item';
        
        datasetItem.innerHTML = `
            <h3>${dataset.title}</h3>
            <p>${dataset.description}</p>
            <a href="${dataset.url}" target="_blank">Download</a>
        `;
        
        if (dataset.featured) {
            featuredContainer.appendChild(datasetItem.cloneNode(true));
        }
        
        datasetContainer.appendChild(datasetItem);
    });
}

// Load datasets on page load
window.onload = displayDatasets;