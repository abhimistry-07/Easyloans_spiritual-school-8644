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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Navbar from "./Homepage/Homepage1/Navbar";
import { css } from "@emotion/react";
import Footer from "./Homepage/HomePage2/Footer";

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
        <Box bg="#ffffff" mt="10px" borderRadius={"30px"}>
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

        <Box bg="#ffffff" mt="50px" borderRadius={"30px"}>
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
            With a Easyloans machinery loan, you can get machinery finance of up
            to Rs. 75 lakhs with simple eligibility criteria and minimal
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
            Easyloans can be your perfect machinery finance partner with a
            machinery and equipment loan. Here are some
          </Text>
          <Text textAlign={"center"}>
            advantages of getting our machine loan finance for your business:
          </Text>

          <Grid
            templateColumns="repeat(3, 1fr)"
            mt="30px"
            gap={6}
            css={css`
              @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
              }
            `}
          >
            <Card p="10px" borderRadius={"30px"}>
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

            <Card p="10px" borderRadius={"30px"}>
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

            <Card p="10px" borderRadius={"30px"}>
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

        <Box
          className="InterestRateandCharges"
          bg="#ffffff"
          mt="50px"
          borderRadius={"30px"}
          p={"20px"}
        >
          <Box className="text1">
            <Text as="h1" size="xl" fontSize="4xl" p="15px 50px">
              What are the Applicable Machinery Loan{" "}
              <Text as="b">What are the Applicable Machinery Loan</Text>
            </Text>
            <Text p="10px 50px">
              At Easyloans, we levy three types of charges on machinery loans -
              General Charges, Miscellaneous Charges, and Foreclosure Charges.
              The details of the particular charges under these three categories
              are mentioned below:
            </Text>
            <Text p="20px 50px">
              <Text as={"b"}>General Charges</Text>
              <br />
              Here are the general charges applicable on a Easyloans Machinery
              Loan:
            </Text>
          </Box>

          <TableContainer className="table1" w={"92%"} m={"auto"}>
            <Table variant="simple">
              <Thead bg={"#ADD8E6"}>
                <Tr>
                  <Th>Type of Fee</Th>
                  <Th>Applicable Charges</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Interest Rate</Td>
                  <Td>Starts at 15% p.a.*</Td>
                </Tr>
                <Tr>
                  <Td>Processing Fee</Td>
                  <Td>2.50% of the loan amount + GST</Td>
                </Tr>
                <Tr>
                  <Td>Stamp Duty</Td>
                  <Td>Stamp Duty</Td>
                </Tr>
                <Tr>
                  <Td>Penal/Additional Interest Rate</Td>
                  <Td>3% on Overdue amount per month + GST</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box className="text2" m="20px 0px">
            <Text p="0px 50px">
              <Text as={"b"}>Interest Rate - </Text>It is the rate at which the
              interest would be charged on your machinery loan. Machinery loan
              rate of interest at Easyloans starts from 15% per annum*
            </Text>
            <Text p="0px 50px">
              <Text as={"b"}>Processing Fee - </Text>It is a one-time fee
              charged by the lender for processing your machinery loan
              application. This fee is non-refundable even if the loan doesn’t
              get sanctioned
            </Text>
            <Text p="0px 50px">
              <Text as={"b"}>Stamp Duty - </Text>It is a legal fee that you will
              have to pay for the preparation of your loan agreement. It can
              vary from one state to another
            </Text>
            <Text p="0px 50px">
              <Text as={"b"}>Penal Interest or Additional Interest - </Text>It
              is the interest that will be charged over and above your existing
              machinery loan interest rate in the case of delayed EMI payment
            </Text>
          </Box>
        </Box>

        <Box
          className="MiscellaneousCharges"
          bg="#ffffff"
          mt="50px"
          borderRadius={"30px"}
          p={"20px"}
        >
          <Box className="text1">
            <Text as="h1" size="xl" fontSize="4xl" p="15px 50px">
              Miscellaneous <Text as="b">Charges</Text>
            </Text>
            <Text p="10px 50px">
              The table below depicts the miscellaneous charges applicable to
              your Easyloans Machinery Loan:
            </Text>
          </Box>

          <Box
            className="table2"
            w={"92%"}
            m={"auto"}
            maxHeight="400px"
            overflowY="scroll"
          >
            <Table variant="simple">
              <Thead bg={"#ADD8E6"}>
                <Tr>
                  <Th>Type of Fee</Th>
                  <Th>Applicable Charges</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Dishonor/Bounce Charges</Td>
                  <Td>
                    Rs. 2,000 for every cheque/Payment Instrument Dishonour +
                    GST
                  </Td>
                </Tr>
                <Tr>
                  <Td>Mandate Rejection Service Charge</Td>
                  <Td>Rs. 450 + GST</Td>
                </Tr>
                <Tr>
                  <Td>CCOD Annual Maintenance Charges</Td>
                  <Td>
                    0.25% on Dropline amount or Rs. 1,000, whichever is higher
                    per year
                  </Td>
                </Tr>
                <Tr>
                  <Td>Document Processing Fees</Td>
                  <Td>Rs. 1999 + GST</Td>
                </Tr>
                <Tr>
                  <Td>Outstation Collection Charges</Td>
                  <Td>Rs. 100 + GST per repayment tenure</Td>
                </Tr>
                <Tr>
                  <Td>Statement of Accounts (SOA)</Td>
                  <Td>
                    Soft Copy – Nil. <br /> Branch Walk-in – Rs. 250 + GST
                  </Td>
                </Tr>
                <Tr>
                  <Td>Loan Cancellation Charges</Td>
                  <Td>
                    2% of the loan amount or Rs. 5,750, whichever is higher +
                    GST
                  </Td>
                </Tr>
                <Tr>
                  <Td>Payment Instrument Swapping</Td>
                  <Td>Rs. 550 + GST</Td>
                </Tr>
                <Tr>
                  <Td>Duplicate Repayment Schedule</Td>
                  <Td>
                    Soft Copy – Nil
                    <br />
                    Branch Walk-In – Rs. 550 + GST
                  </Td>
                </Tr>
                <Tr>
                  <Td>Duplicate NOC</Td>
                  <Td>Rs. 550 + GST</Td>
                </Tr>
                <Tr>
                  <Td>Post-dated Cheque Charges</Td>
                  <Td>Rs. 850 + GST</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box className="text2" m="20px 50px">
            <UnorderedList>
              <ListItem>
                <Text>
                  <Text as={"b"}>Bounce Charges - </Text>Bounce or dishonor
                  charges are levied by the lender if your EMI gets bounced.
                  This usually happens when you miss your EMI payment due to the
                  lack of funds in your bank account
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Mandate Rejection Service Charge - </Text>A
                  mandate rejection service charge is levied if you reject any
                  of the services rendered by your lender
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>CCOD Annual Maintenance Charge - </Text>If you
                  have opted for a Cash Credit or Over Draft facility on your
                  machinery loan, you might have to pay a CCOD annual
                  maintenance charge. This charge is levied for the maintenance
                  of your CC or OD account
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Document Processing Charge - </Text>Your
                  machinery loan application involves several stages of
                  documentation, including the preparation of your loan
                  agreement, indexing, etc. The lender charges a document
                  processing charge for processing such documents
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Outstation Collection Charge - </Text>If you
                  have issued payment cheque(s) to a non-local branch, your
                  lender may levy an outstation collection charge for the
                  collection of your cheque(s)
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Statement of Accounts - </Text>If you want a
                  hard copy of your statement of accounts, i.e., the list of
                  transactions made from your bank account during a given
                  period, you may have to pay this charge
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Loan Cancellation Charges - </Text>If you wish
                  to cancel your machinery loan after its disbursal, loan
                  cancellation charges would be applicable
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Payment Instrument Swapping - </Text>If you
                  wish to change or swap your payment mode with a different
                  financial instrument, you might have to pay a payment
                  instrument swapping charge
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Duplicate Repayment Schedule - </Text>The first
                  copy of your loan repayment or amortization schedule is free.
                  However, if you want a duplicate copy of your loan repayment
                  schedule, you will have to pay a fee for it
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Duplicate NOC - </Text>A No Objection
                  Certificate or NOC would be sent by your lender once you’ve
                  repaid your entire loan amount. If you end up losing this NOC,
                  you can apply for its duplicate copy by paying a duplicate NOC
                  fee
                </Text>
              </ListItem>{" "}
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Post-Dated Cheque Charges - </Text>If you’re
                  issuing post-dated cheques or PDCs for EMI payments of your
                  machinery loan, you will be charged a fee known as post-dated
                  cheque charges
                </Text>
              </ListItem>{" "}
            </UnorderedList>
          </Box>
        </Box>

        <Box
          className="ForeclosureCharges"
          bg="#ffffff"
          mt="50px"
          borderRadius={"30px"}
          p={"20px"}
        >
          <Box className="text1">
            <Text as="h1" size="xl" fontSize="4xl" p="15px 50px">
              Foreclosure <Text as="b">Charges</Text>
            </Text>
            <Text p="10px 50px">
              Below are the foreclosure charges applicable on Easyloans
              Machinery Loans:
            </Text>
          </Box>

          <Box
            className="table3"
            w={"92%"}
            m={"auto"}
            // maxHeight="400px"
            // overflowY="scroll"
          >
            <Table variant="simple">
              <Thead bg={"#ADD8E6"}>
                <Tr>
                  <Th>Type of Fee</Th>
                  <Th>Applicable Charges</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Foreclosure Charges</Td>
                  <Td>
                    <UnorderedList>
                      <ListItem>
                        4.5% of the principal outstanding on existing loan + GST
                      </ListItem>
                      <ListItem>
                        No foreclosure allowed for the first nine months
                      </ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Foreclosure Charges for Top-up</Td>
                  <Td>
                    <UnorderedList>
                      <ListItem>
                        2.25% on the principal outstanding on the existing + GST
                      </ListItem>
                      <ListItem>
                        Foreclosure charges shall be levied only if the new rate
                        is lower than the existing rate
                      </ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Foreclosure Charges for CCOD</Td>
                  <Td>
                    <UnorderedList>
                      <ListItem>
                        4.5% on the Dropped Down limit amount + GST
                      </ListItem>
                      <ListItem>
                        No foreclosure is allowed for the first nine months
                      </ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Foreclosure Letter Charge</Td>
                  <Td>
                    <UnorderedList>
                      <ListItem>Soft Copy – Nil</ListItem>
                      <ListItem>Branch Walk-In – Rs. 199 + GST</ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box className="text2" m="20px 50px">
            <UnorderedList>
              <ListItem>
                <Text>
                  <Text as={"b"}>Foreclosure Charges - </Text>If you wish to
                  make a pre-payment on your machinery loan, whether in part or
                  full, the lender will levy a foreclosure charge. These charges
                  are not applicable on loans taken with floating interest rates
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Foreclosure Charges for Top-Up - </Text>If you
                  have taken a top-up loan on your machinery loan and want to
                  make a pre-payment on it, whether in part or full, the lender
                  will levy a foreclosure charge for a top-up
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Foreclosure Charges on CCOD - </Text>If you
                  availed of a Cash Credit or Over Draft facility on your
                  machinery loan and want to foreclose it, the lender will levy
                  a foreclosure charge on CCOD
                </Text>
              </ListItem>
              <ListItem>
                {" "}
                <Text>
                  <Text as={"b"}>Foreclosure Letter Charge - </Text>If you want
                  to foreclose your loan, you will have to ask for a foreclosure
                  letter from your lender. The soft copy of this letter is
                  usually free, but the lender may levy a foreclosure letter
                  charge for providing a hard copy
                </Text>
              </ListItem>{" "}
            </UnorderedList>
          </Box>
        </Box>

        <Box className="popularFaqs" bg="" mt="50px" borderRadius={"30px"}>
          <Text
            as="h1"
            size="xl"
            fontSize="4xl"
            p="15px 50px"
            textAlign={"center"}
          >
            Popular <Text as="b">FAQs</Text>
          </Text>

          <Accordion
            allowToggle
            bg={"#ffffff"}
            borderRadius={"30px"}
            p={"40px"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>Can we get a loan for used machinery?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, you can get a loan for used machinery. Depending on the
                eligibility criteria set by the lender, you can apply for a loan
                to service your used machinery.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>What is the tenure for machinery loan?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Your machinery loan tenure depends on how much time you need to
                repay the loan. Tenures are available on a short basis, such as
                36 months as well as a long basis, such as ten years.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>How does a loan for machinery work?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A loan for machinery work is similar to other financial loans.
                This specific category caters to loans for servicing or
                procuring machinery and has eligibility criteria for the
                business to qualify for.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      What kind of documentation is needed for a loan for
                      machinery?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Similar to other loans, machinery loans have similar
                documentation requirements. They are:
                <UnorderedList>
                  <ListItem>Proof of identity</ListItem>
                  <ListItem>Proof of address</ListItem>
                  <ListItem>Colour photographs of the business owners</ListItem>
                  <ListItem>KYC documents for business</ListItem>
                  <ListItem>Proof of income</ListItem>
                  <ListItem>Facility sanction letter</ListItem>
                  <ListItem>
                    Quotation price of the machine to be purchased
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>What is a loan for MSME machinery?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A loan for MSME machinery is granted to businesses willing to
                service or purchase new equipment. The main requirement to
                qualify for this loan is to come under the qualification as a
                micro, small or medium enterprise.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      Why taking out a loan for machinery makes financial sense?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Since new equipment can cost a lot of money, you might need
                money to use for daily operations rather than buy new equipment.
                A loan for machinery can help you focus on buying equipment
                without having to sacrifice your daily operations, which is why
                it makes good financial sense.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      Can we move a loan for machinery to a different bank?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                As a machinery loan comes under a business loan, it can be moved
                to a different lender to avail of better interest rates.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      Why are interest rates on loans for machinery so cheap in
                      comparison?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Because machinery loans offer collateral through the equipment,
                the interest rates are lower than other types of loans. This
                acts as a sense of security for the lender in case of payment
                defaults.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      Can I obtain a loan from MSME to purchase machinery?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, you can avail of a business loan as part of the MSME
                enterprises. You will only have to meet the requirements set by
                the institution to avail of a loan.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>
                      Do banks offer loans for new machinery purchases?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, there are various lenders offering loans for new machinery
                purchases. However, they would all have varying eligibility
                criteria, so it’s important to go through them before choosing a
                lender.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as={"b"}>Can you buy new machinery with a loan?</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, you can buy new machinery with a loan. Lenders offer
                machinery loans to enterprises willing to purchase new equipment
                for their operations.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default MachineryLoanPage;
