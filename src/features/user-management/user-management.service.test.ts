import UserManagementService from './user-management.service';

describe('UserManagementService', () => {
  let userManagementService: UserManagementService;
  const logger = {};
  const userManagementRepository = {
    getAllUsers: jest.fn().mockResolvedValue({ count: 0, rows: [] }),
  };

  beforeEach(() => {
    userManagementService = new UserManagementService({ logger, userManagementRepository });
  });

  describe('getAllUsers', () => {
    describe('when getAllUsers is called', () => {
      test('should call getAllUsers from repo', async () => {
        await userManagementService.getAllUsers();
        expect(userManagementRepository.getAllUsers).toBeCalled();
      });
    });
  });
});
