## Task #2

### #1
Using Chrome Chrome Developer Tools Postman and Fiddler run the following queries against a server that is deployed when performing the task 1:

1. Receive all invoices, any field containing the number “7”
2. Receive all invoices, the value of the field number less than “100000”

[Solution](./1/README.md)

### #2
Using Postman or Fiddler, run the following queries:

1. Create invoice
2. Change invoice
3. Delete invoice
By analogy with the assignment from the previous paragraph it is necessary to create a document with screenshots of the responses received from both instruments for each query. The document also needs to put on GitHub in a repository for task 1 in the same folder along with the previously created document.

[Solution](./2/README.md)

### #3
Using Postman to create two collections with automated tests for the API provided by the server that are deployed when performing the task 1.
A minimal set of tests in the first collection:

1. Test for receipt of all invoices
2. Test adding overhead
3. Test for change of invoices
4. Test for removing false
5. A minimum set of tests in the second collection:

Test for receipt of invoices filtered by the field value. The field name and its value should be set in the environment variables. For this test, prepare a file with a JSON array of values of the variables to each field in the invoice must correspond to a single array element (i.e., must be provisioned for the data filter on each field).

[Solution](./3/README.md)