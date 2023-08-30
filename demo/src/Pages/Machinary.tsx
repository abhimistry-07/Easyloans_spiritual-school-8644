import React from "react";
import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "./Homepage/Homepage1/Navbar";

// : React.FC =

const MachineryLoanPage = () => {
  return (
    <Box bg="">
      <Box className="navbar">
        <Navbar />
      </Box>
      <Box className="content" p="50px" textAlign="left">
        <Box bg="#5E8AF9" mt="10px" borderRadius={"30px"}>
          <Text mt={4} p="50px">
            Easyloans offers Machinery Loans to help businesses update their
            existing machinery and scale to greater heights. Keeping in mind the
            rapid advancements in technology, the latest machinery and equipment
            are necessary for the success of any business. For manufacturing
            businesses, procuring top-of-the-line machinery is even more crucial
            to ensure maximum productivity. They not only help them reduce the
            dependency on manpower but also allows them to meet peak season
            demand for their products. Businesses who need machinery finance to
            buy new machines can opt for a machinery loan in India.
          </Text>
        </Box>
        <Box bg="#5E8AF9" mt="50px" borderRadius={"30px"}>
          <Text as="h1" size="xl" fontSize="4xl" p="15px 50px">
            What is a <Text as="b">Machinery Loan?</Text>
          </Text>
          <Text p="10px 50px">
            A machinery loan is typically provided to business owners to buy new
            machines or equipment. Also known as machine loan finance, this is a
            special type of business loan that can be taken exclusively for
            buying new machines or upgrading existing equipment. Several lending
            institutions provide machinery loan for new business in India to
            ensure financial roadblocks don’t hinder them from achieving
            success.
          </Text>
          <Text p="20px 50px">
            With a Tata Capital machinery loan, you can get machinery finance of
            up to Rs. 75 lakhs with simple eligibility criteria and minimal
            documentation. Moreover, our machinery loan interest rate is among
            the lowest in the market, starting from just 15% per annum*.
          </Text>
        </Box>
        <Box bg="#5E8AF9" mt="50px" borderRadius={"30px"}>
          <Text
            as="h1"
            size="xl"
            fontSize="4xl"
            p="15px 50px"
            textAlign="center"
          >
            Product <Text as="b">Offerings</Text>
          </Text>
          <Text textAlign="center">
            Apart from the affordable machinery loan interest rate, our loan for
            machinery purchase comes with the following offerings:
          </Text>
        </Box>
        <VStack >
          <Flex>
            <Avatar
              style={{ border: "1px solid red" }}
              name="Dan Abrahmov"
              src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
            />
            <VStack style={{ border: "1px solid red" }}>
              <Text textAlign="left">Loan Amount</Text>
              <Text>
                We offer customized machinery finance from Rs. 0.40 lakh to Rs.
                75 lakhs so that you can meet all your requirements with ease
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Box>

      <Box p={4}>
        <Heading as="h2" size="lg" mt={6}>
          Product Offerings
        </Heading>
        <Text mt={4}>{/* Add content for "Product Offerings" section */}</Text>

        <Heading as="h2" size="lg" mt={6}>
          Features and Advantages of a Machinery Loan
        </Heading>
        <Text mt={4}>
          {/* Add content for "Features and Advantages" section */}
        </Text>

        <Heading as="h2" size="lg" mt={6}>
          What are the Eligibility Criteria for a Machinery Loan?
        </Heading>
        <Text mt={4}>
          {/* Add content for "Eligibility Criteria" section */}
        </Text>
      </Box>
    </Box>
  );
};

export default MachineryLoanPage;
