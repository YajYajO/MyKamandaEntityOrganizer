CREATE TABLE User (
    Username VARCHAR(50) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Password VARCHAR(50)
);

CREATE TABLE Business (
    BusinessID INT PRIMARY KEY,
    Username VARCHAR(50),
    BusinessName VARCHAR(100),
    Field VARCHAR(100),
    Structure VARCHAR(100),
    SICCode VARCHAR(10),
    DataFurnishedCode VARCHAR(10),
    BusinessCreditScore INT,
    PersonalCreditScore INT,
    DomainName VARCHAR(100),
    Websites VARCHAR(200),
    NumOfFranchise INT,
    Labels VARCHAR(200),
    SocialMedia VARCHAR(200),
    HQAddress VARCHAR(200),
    FOREIGN KEY (Username) REFERENCES User(Username)
);

CREATE TABLE Documents (
    DocumentID INT PRIMARY KEY,
    BusinessID INT,
    LegalDoc VARCHAR(200),
    TaxReturn VARCHAR(200),
    FinancialDoc VARCHAR(200),
    ArticlesOfIncorporation VARCHAR(200),
    StatementsOfInformation VARCHAR(200),
    Licenses VARCHAR(200),
    FOREIGN KEY (BusinessID) REFERENCES Business(BusinessID)
);

CREATE TABLE Franchise (
    FranchiseID INT PRIMARY KEY,
    BusinessID INT,
    OwnerFirstName VARCHAR(50),
    OwnerLastName VARCHAR(50),
    Address VARCHAR(200),
    PhoneNumber VARCHAR(20),
    FOREIGN KEY (BusinessID) REFERENCES Business(BusinessID)
);
