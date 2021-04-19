"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTagFromImageUri = exports.ecrRepositoryFromImageUri = exports.SHARED_VPC_ID_SSM = exports.IMAGE_URI_EXPORT = exports.SHARED_CLUSTER_NAME_EXPORT = void 0;
exports.SHARED_CLUSTER_NAME_EXPORT = 'shared-cluster-name-export'; // name of an existing ECS cluster; exported as a Cloudformation export from another stack
exports.IMAGE_URI_EXPORT = 'image-uri-export'; // name of an existing Docker image; exported as SSM parameter by another stack
exports.SHARED_VPC_ID_SSM = 'shared-vpc-id-ssm'; // name of an existing VPC; exported as SSM parameter by another stack
exports.ecrRepositoryFromImageUri = (imageUri) => imageUri.split(".com/")[1].split(":")[0];
exports.imageTagFromImageUri = (imageUri) => imageUri.split(":")[1];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLDBCQUEwQixHQUFHLDRCQUE0QixDQUFDLENBQUMsMEZBQTBGO0FBQ3JKLFFBQUEsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQywrRUFBK0U7QUFDdEgsUUFBQSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLHNFQUFzRTtBQUUvRyxRQUFBLHlCQUF5QixHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUYsUUFBQSxvQkFBb0IsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0hBUkVEX0NMVVNURVJfTkFNRV9FWFBPUlQgPSAnc2hhcmVkLWNsdXN0ZXItbmFtZS1leHBvcnQnOyAvLyBuYW1lIG9mIGFuIGV4aXN0aW5nIEVDUyBjbHVzdGVyOyBleHBvcnRlZCBhcyBhIENsb3VkZm9ybWF0aW9uIGV4cG9ydCBmcm9tIGFub3RoZXIgc3RhY2tcbmV4cG9ydCBjb25zdCBJTUFHRV9VUklfRVhQT1JUID0gJ2ltYWdlLXVyaS1leHBvcnQnOyAvLyBuYW1lIG9mIGFuIGV4aXN0aW5nIERvY2tlciBpbWFnZTsgZXhwb3J0ZWQgYXMgU1NNIHBhcmFtZXRlciBieSBhbm90aGVyIHN0YWNrXG5leHBvcnQgY29uc3QgU0hBUkVEX1ZQQ19JRF9TU00gPSAnc2hhcmVkLXZwYy1pZC1zc20nOyAvLyBuYW1lIG9mIGFuIGV4aXN0aW5nIFZQQzsgZXhwb3J0ZWQgYXMgU1NNIHBhcmFtZXRlciBieSBhbm90aGVyIHN0YWNrXG5cbmV4cG9ydCBjb25zdCBlY3JSZXBvc2l0b3J5RnJvbUltYWdlVXJpID0gKGltYWdlVXJpOiBzdHJpbmcpID0+IGltYWdlVXJpLnNwbGl0KFwiLmNvbS9cIilbMV0uc3BsaXQoXCI6XCIpWzBdXG5leHBvcnQgY29uc3QgaW1hZ2VUYWdGcm9tSW1hZ2VVcmkgPSAoaW1hZ2VVcmk6IHN0cmluZykgPT4gaW1hZ2VVcmkuc3BsaXQoXCI6XCIpWzFdXG4iXX0=