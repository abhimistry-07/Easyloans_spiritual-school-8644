import React from "react";
import "../App.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./Homepage/Homepage1/Navbar";

// : React.FC =

const MachineryLoanPage = () => {
  return (
    <Box
      bg=""
      // bgGradient={[
      // "linear(to-tr, teal.300, yellow.400)",
      // "linear(to-t, blue.200, teal.500)",
      // "linear(to-b, orange.100, purple.300)",
      // ]}
      bgGradient={["linear(to-tr, #ADD8E6, #ffffff)"]}
    >
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

        <Box bg="" mt="50px" borderRadius={"30px"}>
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

        <VStack spacing="24px" mt={"20px"}>
          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  style={{ textAlign: "left", marginLeft: "0" }}
                >
                  Loan Amount
                </Text>
                <Text>
                  We offer customized machinery finance from Rs. 0.40 lakh to
                  Rs. 75 lakhs so that you can meet all your requirements with
                  ease
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  style={{ textAlign: "left", marginLeft: "0" }}
                >
                  Loan Tenure
                </Text>
                <Text>
                  Our machinery loans are issued for the tenures of 12 months to
                  60 months so that you can plan your repayment conveniently
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack m={"auto"} ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  textAlign="center"
                  style={{ textAlign: "center" }}
                >
                  Interest Rates{" "}
                </Text>
                <Text>
                  Our machinery loan rate of interest is very competitive,
                  starting from just 15% per annum*
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack m={"auto"} ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  textAlign="center"
                  style={{ textAlign: "center" }}
                >
                  Customized Products{" "}
                </Text>
                <Text>
                  Our machinery loans are highly customizable. You can choose
                  your machinery loan interest rate, amount, and tenure as per
                  your business needs
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack m={"auto"} ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  textAlign="center"
                  style={{ textAlign: "center" }}
                >
                  No Collateral
                </Text>
                <Text>
                  We do not ask for any collateral or security for providing a
                  loan for machinery purchase
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack m={"auto"} ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  textAlign="center"
                  style={{ textAlign: "center" }}
                >
                  Multiple EMI Options
                </Text>
                <Text>
                  With our machine loan finance, you can choose to pay your
                  machinery loan EMI as per your income pattern{" "}
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack
            align="flex-start"
            p={5}
            w={"90%"}
            borderRadius={"30px"}
            bgGradient={["linear(to-l, #8f8fd6, #ADD8E6)"]}
          >
            <Flex>
              <Avatar
                margin={"auto"}
                name="Dan Abrahmov"
                src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png"
              />
              <VStack m={"auto"} ml={"5"}>
                <Text
                  fontSize="2xl"
                  className="left-aligned-text"
                  textAlign="center"
                  style={{ textAlign: "center" }}
                >
                  Easy Eligibility
                </Text>
                <Text>
                  We believe in supporting every business owner in India, and
                  that’s why we offer machinery loan for new businesses as well
                  as large enterprises with simple eligibility
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>

        <Box bg="" mt="50px" borderRadius={"30px"}>
          <Text
            as="h1"
            size="xl"
            fontSize="4xl"
            p="15px 50px"
            textAlign={"center"}
          >
            Features and Advantages of a <Text as="b">Machinery Loan</Text>
          </Text>
          <Text pt="10px" textAlign={"center"}>
            Tata Capital can be your perfect machinery finance partner with a
            machinery and equipment loan. Here are some
          </Text>
          <Text textAlign={"center"}>
            advantages of getting our machine loan finance for your business:
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" mt="30px" gap={6}>
            <Card maxW="md" p="10px" borderRadius={"30px"}>
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar src="https://cdn-icons-png.flaticon.com/128/2660/2660516.png" />
                    <Box>
                      <Heading size="sm">Higher Business Productivity</Heading>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  If you’re into a manufacturing business, you are dependent on
                  machines for the production of your goods. By procuring modern
                  machines with new-age technologies, you can improve your
                  business productivity to exceptional levels. As a result, you
                  will be able to achieve greater sales and fulfill your
                  customers’ needs in time.
                </Text>
              </CardBody>
            </Card>
            
          </Grid>
        </Box>
      </Box>

      <Box p={4}>
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
