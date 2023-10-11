import unittest


from lib.qemu import start_machine_command
class TestQemuLibraryGenerateCommand(unittest.TestCase):
    def test_default_config(self):
        try:
            start_machine_command("")
        except Exception:
            self.assertTrue(True)
            return
        
        self.fail("exception was not raised")
    
    def test_custom_config(self):
        expected_command = "-m 8G -smp 8 -drive file=a.qcow2 -vnc 4"
        self.assertIn(expected_command, start_machine_command("a.qcow2",vnc=4, memory=8, cpu=8))
    
    def test_some_defaults(self): 
        expected_command = "-m 8G -smp 12 -drive file=defaults.qcow2 -vnc 16"
        self.assertIn(expected_command, start_machine_command("defaults.qcow2", cpu=12, vnc=16))    

    def test_no_vnc(self):  
        expected_command = "-m 8G -smp 12 -drive file=novnc.qcow2"
        self.assertIn(expected_command, start_machine_command("novnc.qcow2", cpu=12))    


from lib.qemu import create_disk_command
class TestQemuDiskCommand(unittest.TestCase):
    def test_no_qcow2(self):
        self.assertIn("qcow2", create_disk_command("poop", "10G"))
    def test_no_g(self):
        self.assertIn("10G", create_disk_command("poop", "10"))
    

if __name__ == "__main__":
    unittest.main()