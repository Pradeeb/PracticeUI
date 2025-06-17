import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Divider,
  CircularProgress
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Dashboard() {
  const fetchUserProfile = async () => {
    const response = await axios.get("http://localhost:8080/api/userProfile", {
      withCredentials: true // this sends the accessToken cookie
    });
    if (!response.data.success) throw new Error("Failed to load profile");
    return response.data.data.data; // nested inside data.data.data
  };

  const {data: userData,isLoading,isError,error} = useQuery({queryKey: ['userProfile'],queryFn: fetchUserProfile  });

  if (isLoading) return <div className="text-center mt-10"><CircularProgress /></div>;
  if (isError) return <div className="text-center mt-10 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Typography variant="h4" className="mb-8 font-semibold text-gray-800">
        Welcome, {userData.name}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="rounded-2xl shadow-lg">
            <CardContent>
              <Typography variant="h6" className="text-gray-700 mb-4">👤 User Profile</Typography>
              <Divider className="mb-4" />
              <Typography><strong>Client Code:</strong> {userData.clientcode}</Typography>
              <Typography><strong>Email:</strong> {userData.email || 'N/A'}</Typography>
              <Typography><strong>Mobile:</strong> {userData.mobileno || 'N/A'}</Typography>
              <Typography><strong>Last Login:</strong> {userData.lastlogintime || 'N/A'}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="rounded-2xl shadow-lg">
            <CardContent>
              <Typography variant="h6" className="text-gray-700 mb-4">📈 Exchange Access</Typography>
              <Divider className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {userData.exchanges.map((ex, i) => (
                  <Chip key={i} label={ex.toUpperCase()} color="primary" />
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className="rounded-2xl shadow-lg">
            <CardContent>
              <Typography variant="h6" className="text-gray-700 mb-4">🛠️ Product Access</Typography>
              <Divider className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {userData.products.map((prod, i) => (
                  <Chip key={i} label={prod} color="secondary" />
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
